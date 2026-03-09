import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afja General Trading | Leading FMCG Distribution",
  description: "Modern FMCG distribution company specializing in food, household goods, and daily essentials.",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
