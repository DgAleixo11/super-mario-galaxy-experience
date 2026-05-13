import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Mario Galaxy Experience | Front-end Project",
  description:
    "Landing page cinematográfica inspirada em Super Mario Galaxy, criada com Next.js, TypeScript, Tailwind CSS e Framer Motion.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Front-end",
    "Landing Page",
    "Portfolio",
    "Super Mario Galaxy",
  ],
  authors: [
    {
      name: "Diogo Aleixo",
    },
  ],
  creator: "Diogo Aleixo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
