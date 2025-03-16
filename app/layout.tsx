import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "My ToDo List",
  description: "GetR Done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}
      bg-gray-200  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}
     
      >{children}</body>
    </html>
  );
}
