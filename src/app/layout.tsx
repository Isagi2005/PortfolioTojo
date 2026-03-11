import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANDRIAMAHEFA Tojo Julio | Wildlife Conservation Researcher",
  description: "Madagascar biodiversity conservation researcher specializing in lemur protection, endangered species research, and community-based conservation initiatives.",
  keywords: ["conservation", "biodiversity", "Madagascar", "lemurs", "wildlife research", "endangered species"],
  authors: [{ name: "ANDRIAMAHEFA Tojo Julio" }],
  openGraph: {
    title: "ANDRIAMAHEFA Tojo Julio | Wildlife Conservation Researcher",
    description: "Protecting Madagascar's unique biodiversity and endangered species through research and community engagement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
