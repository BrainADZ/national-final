import Link from "next/link";
import { Fragment } from "react";

const BRAND_PATTERN = /(National Engineers\s*(?:&|and)\s*Steel Fabricators|NESF)/gi;
const BRAND_EXACT_PATTERN = /^(National Engineers\s*(?:&|and)\s*Steel Fabricators|NESF)$/i;

export default function BrandHomeLink({ text }: { text: string }) {
  return text.split(BRAND_PATTERN).map((part, index) =>
    BRAND_EXACT_PATTERN.test(part) ? (
      <Link key={`${part}-${index}`} href="/" className="hover:underline">
        {part}
      </Link>
    ) : (
      <Fragment key={`${part}-${index}`}>{part}</Fragment>
    ),
  );
}
