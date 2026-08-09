import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kedar Thakar — Marketing Strategist & Portfolio",
  description:
    "Portfolio of Kedar Thakar — Web Developer & Digital Marketer at Airavat Security Service. Building brands, driving growth, crafting strategies.",
  keywords: ["Kedar Thakar", "Marketing Manager", "Portfolio", "Airavat Security", "Digital Marketing", "Brand Strategy"],
  openGraph: { title: "Kedar Thakar", description: "Marketing Strategist & Portfolio", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="noise-overlay" />
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}
