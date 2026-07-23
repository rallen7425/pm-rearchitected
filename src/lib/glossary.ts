import { getSupabaseClient } from "./supabase";

export interface Category {
  id_slug: string;
  name: string;
  description: string | null;
  sort_order: number;
}

export interface TermSummary {
  id_slug: string;
  canonical_term: string;
  short_definition: string;
  category_id: string;
  priority: number;
}

export interface TermDetail extends TermSummary {
  long_definition: string;
  classification: string;
  aliases: { alias_text: string; alias_type: string }[];
  related_terms: { id_slug: string; canonical_term: string }[];
  sources: { source_name: string; url: string }[];
}

export interface StudyTerm {
  id_slug: string;
  canonical_term: string;
  short_definition: string;
  long_definition: string;
  category_id: string;
  priority: number;
}

export interface TermSearchResult {
  id_slug: string;
  canonical_term: string;
  short_definition: string;
  category_id: string;
  priority: number;
  rank: number;
}

export interface SearchGlossaryOptions {
  category?: string;
  maxPriority?: number;
}

export async function searchGlossary(
  query: string,
  { category, maxPriority }: SearchGlossaryOptions = {}
): Promise<TermSearchResult[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.rpc("search_terms", {
    search_query: query,
    filter_category: category ?? null,
    filter_max_priority: maxPriority ?? null,
  });
  if (error) throw error;
  return (data ?? []) as TermSearchResult[];
}

export async function listCategories(): Promise<Category[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .select("id_slug, name, description, sort_order")
    .order("sort_order");
  if (error) throw error;
  return data ?? [];
}

export async function listTopTerms(maxPriority = 2): Promise<TermSummary[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("terms")
    .select("id_slug, canonical_term, short_definition, category_id, priority")
    .eq("status", "active")
    .lte("priority", maxPriority)
    .order("priority")
    .order("canonical_term");
  if (error) throw error;
  return data ?? [];
}

export async function listTermsByCategory(categorySlug: string): Promise<TermSummary[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("terms")
    .select("id_slug, canonical_term, short_definition, category_id, priority")
    .eq("status", "active")
    .eq("category_id", categorySlug)
    .order("priority")
    .order("canonical_term");
  if (error) throw error;
  return data ?? [];
}

export async function listStudyTerms(): Promise<StudyTerm[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("terms")
    .select("id_slug, canonical_term, short_definition, long_definition, category_id, priority")
    .eq("status", "active")
    .order("category_id")
    .order("priority")
    .order("canonical_term");
  if (error) throw error;
  return data ?? [];
}

export async function listAllTermSlugs(): Promise<string[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from("terms").select("id_slug");
  if (error) throw error;
  return (data ?? []).map((t) => t.id_slug);
}

export async function getTermBySlug(slug: string): Promise<TermDetail | null> {
  const supabase = getSupabaseClient();

  const { data: term, error: termError } = await supabase
    .from("terms")
    .select(
      "id_slug, canonical_term, short_definition, long_definition, category_id, priority, classification"
    )
    .eq("id_slug", slug)
    .eq("status", "active")
    .maybeSingle();
  if (termError) throw termError;
  if (!term) return null;

  const [{ data: aliases, error: aliasError }, { data: relations, error: relationError }, { data: sources, error: sourceError }] =
    await Promise.all([
      supabase.from("aliases").select("alias_text, alias_type").eq("term_id", slug),
      supabase.from("related_terms").select("related_term_id").eq("term_id", slug),
      supabase.from("sources").select("source_name, url").eq("term_id", slug),
    ]);
  if (aliasError) throw aliasError;
  if (relationError) throw relationError;
  if (sourceError) throw sourceError;

  const relatedIds = (relations ?? []).map((r) => r.related_term_id);
  let relatedTerms: { id_slug: string; canonical_term: string }[] = [];
  if (relatedIds.length > 0) {
    const { data, error } = await supabase
      .from("terms")
      .select("id_slug, canonical_term")
      .in("id_slug", relatedIds)
      .order("canonical_term");
    if (error) throw error;
    relatedTerms = data ?? [];
  }

  return {
    ...term,
    aliases: aliases ?? [],
    related_terms: relatedTerms,
    sources: sources ?? [],
  };
}
