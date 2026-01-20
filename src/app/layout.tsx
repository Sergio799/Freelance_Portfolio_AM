import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhaskar Bavineni | Data Engineer & Analyst",
  description: "Data Engineer and Analyst with 4+ years of experience designing scalable data ecosystems across AWS, Azure, and GCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
