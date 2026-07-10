import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick Allen — Product Management, Re-Architected",
  description:
    "Essays, a curated newsfeed, and a resource library for SaaS product leaders adapting to the AI shift. By Rick Allen.",
  openGraph: {
    title: "Rick Allen — Product Management, Re-Architected",
    description:
      "Essays, a curated newsfeed, and a resource library for SaaS product leaders adapting to the AI shift.",
    siteName: "Product Management, Re-Architected",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Allen — Product Management, Re-Architected",
    description:
      "Essays, a curated newsfeed, and a resource library for SaaS product leaders adapting to the AI shift.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
