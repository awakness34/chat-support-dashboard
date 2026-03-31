import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Support Dashboard",
  description: "Beautiful support workspace built with Next.js, TypeScript, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
