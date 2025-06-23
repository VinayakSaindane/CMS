import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Contentstack CMS Site",
  description: "Built with Next.js and Contentstack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">{children}</body>
    </html>
  );
}