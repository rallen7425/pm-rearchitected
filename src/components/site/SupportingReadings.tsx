// Render the draft's limited inline formatting as React elements, never raw HTML.
function InlineText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) {
      return <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{link[1]}</a>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function SupportingReadings({ content }: { content: string }) {
  return (
    <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
      {content.split(/\n\n+/).map((block, i) => block.startsWith("- ") ? (
        <ul key={i} className="list-disc space-y-2 pl-5">
          {block.split("\n").map((line, j) => <li key={j}><InlineText text={line.replace(/^- /, "")} /></li>)}
        </ul>
      ) : <p key={i}><InlineText text={block} /></p>)}
    </div>
  );
}
