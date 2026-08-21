import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import { getSupabaseClient } from "../src/lib/supabase";

const DB_DIR = path.join(process.cwd(), "db/glossary");

function readCsv<T>(filename: string): T[] {
  const raw = fs.readFileSync(path.join(DB_DIR, filename), "utf-8");
  return parse(raw, { columns: true, skip_empty_lines: true }) as T[];
}

type CategoryRow = {
  id_slug: string;
  name: string;
  description: string;
  sort_order: string;
  domain: string;
};
type TermRow = {
  id_slug: string;
  canonical_term: string;
  short_definition: string;
  long_definition: string;
  category: string;
  priority: string;
  classification: string;
  status: string;
};
type AliasRow = { term_slug: string; alias_text: string; alias_type: string };
type RelatedRow = { term_slug: string; related_term_slug: string; relationship_type: string };
type SourceRow = { term_slug: string; source_name: string; url: string; source_type: string };

async function main() {
  const supabase = getSupabaseClient();

  const categoriesRows = readCsv<CategoryRow>("categories.csv");
  const termsRows = readCsv<TermRow>("terms.csv");
  const aliasesRows = readCsv<AliasRow>("aliases.csv");
  const relatedRows = readCsv<RelatedRow>("related_terms.csv");
  const sourcesRows = readCsv<SourceRow>("sources.csv");

  // Clear existing data in reverse-FK order so this script is safely re-runnable.
  const deleteKeyCol: Record<string, string> = {
    sources: "id",
    related_terms: "term_id",
    aliases: "id",
    terms: "id_slug",
    categories: "id_slug",
  };
  for (const table of ["sources", "related_terms", "aliases", "terms", "categories"] as const) {
    const { error } = await supabase.from(table).delete().not(deleteKeyCol[table], "is", null);
    if (error) throw new Error(`clearing ${table}: ${error.message}`);
  }

  const categoryNameToSlug = new Map(categoriesRows.map((c) => [c.name, c.id_slug]));

  {
    const rows = categoriesRows.map((c) => ({
      id_slug: c.id_slug,
      name: c.name,
      description: c.description || null,
      sort_order: Number(c.sort_order),
      domain: c.domain,
    }));
    const { error } = await supabase.from("categories").insert(rows);
    if (error) throw new Error(`categories: ${error.message}`);
    console.log(`categories: ${rows.length}`);
  }

  {
    const rows = termsRows.map((t) => {
      const categorySlug = categoryNameToSlug.get(t.category);
      if (!categorySlug) throw new Error(`Unknown category "${t.category}" for term ${t.id_slug}`);
      return {
        id_slug: t.id_slug,
        canonical_term: t.canonical_term,
        short_definition: t.short_definition,
        long_definition: t.long_definition,
        category_id: categorySlug,
        priority: Number(t.priority),
        classification: t.classification,
        status: t.status,
      };
    });
    const { error } = await supabase.from("terms").insert(rows);
    if (error) throw new Error(`terms: ${error.message}`);
    console.log(`terms: ${rows.length}`);
  }

  {
    const rows = aliasesRows.map((a) => ({
      term_id: a.term_slug,
      alias_text: a.alias_text,
      alias_type: a.alias_type,
    }));
    const { error } = await supabase.from("aliases").insert(rows);
    if (error) throw new Error(`aliases: ${error.message}`);
    console.log(`aliases: ${rows.length}`);
  }

  {
    // Each pair in the CSV is stored once (alphabetically); insert both
    // directions so the relationship is queryable from either term.
    const rows = relatedRows.flatMap((r) => [
      { term_id: r.term_slug, related_term_id: r.related_term_slug, relationship_type: r.relationship_type },
      { term_id: r.related_term_slug, related_term_id: r.term_slug, relationship_type: r.relationship_type },
    ]);
    const { error } = await supabase.from("related_terms").insert(rows);
    if (error) throw new Error(`related_terms: ${error.message}`);
    console.log(`related_terms: ${rows.length} rows (${relatedRows.length} pairs x2)`);
  }

  {
    const rows = sourcesRows.map((s) => ({
      term_id: s.term_slug,
      source_name: s.source_name,
      url: s.url,
      source_type: s.source_type,
    }));
    const { error } = await supabase.from("sources").insert(rows);
    if (error) throw new Error(`sources: ${error.message}`);
    console.log(`sources: ${rows.length}`);
  }

  // Backfill alias_text_concat so aliases (LLM, GAN, RAG, ...) are searchable
  // via terms.search_vector without a separate query path.
  const aliasesByTerm = new Map<string, string[]>();
  for (const a of aliasesRows) {
    const list = aliasesByTerm.get(a.term_slug) ?? [];
    list.push(a.alias_text);
    aliasesByTerm.set(a.term_slug, list);
  }
  for (const [termSlug, aliasTexts] of aliasesByTerm) {
    const { error } = await supabase
      .from("terms")
      .update({ alias_text_concat: aliasTexts.join(" ") })
      .eq("id_slug", termSlug);
    if (error) throw new Error(`alias_text_concat backfill for ${termSlug}: ${error.message}`);
  }
  console.log(`alias_text_concat backfilled for ${aliasesByTerm.size} terms`);

  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
