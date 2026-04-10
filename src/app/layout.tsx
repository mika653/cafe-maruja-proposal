import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe Maruja — Website Proposal | Fishbone Creatives",
  description:
    "Website revamp proposal for Cafe Maruja, Boracay. Prepared by Fishbone Creatives.",
  openGraph: {
    title: "Cafe Maruja — Website Proposal",
    description:
      "Website revamp proposal for Cafe Maruja, Boracay. Prepared by Fishbone Creatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
