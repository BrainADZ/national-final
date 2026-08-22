import Link from "next/link";
const BRAND_PATTERN = /National Engineers\s*(?:&|and)\s*Steel Fabricators/i;

export default function BrandHomeLink({ text }: { text: string }) {
  const match = BRAND_PATTERN.exec(text);
  if (!match) return text;

  const start = match.index;
  const end = start + match[0].length;

  return (
    <>
      {text.slice(0, start)}
      <Link href="/" className="hover:underline">{match[0]}</Link>
      {text.slice(end)}
    </>
  );
}
