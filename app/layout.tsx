import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portion-IQ — Stop the Kitchen Bleeding in 30 Days",
  description:
    "UAE's first restaurant costing & menu control system. Stop losing AED 5,000–25,000 every month from invisible kitchen losses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
