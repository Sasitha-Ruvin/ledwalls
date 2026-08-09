import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: "The page you requested could not be found on YC Events.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-sm text-muted">
        <Link href="/" className="text-brand underline-offset-2 hover:underline">
          Back to home
        </Link>
      </p>
    </main>
  );
}
