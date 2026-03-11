import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export const metadata: Metadata = {
  title: "ANDRIAMAHEFA Tojo Julio | Wildlife Conservation Researcher & Biologist",
  description: "Madagascar wildlife conservation researcher specializing in lemur protection, endangered species monitoring, habitat conservation, and community-based biodiversity projects in Madagascar.",
  keywords: ["conservation researcher", "Madagascar", "lemurs", "wildlife research", "endangered species", "biodiversity", "environmental scientist", "field research", "conservation biologist"],
  authors: [{ name: "ANDRIAMAHEFA Tojo Julio" }],
  creator: "ANDRIAMAHEFA Tojo Julio",
  publisher: "ANDRIAMAHEFA Tojo Julio",
  robots: "index, follow",
  openGraph: {
    title: "ANDRIAMAHEFA Tojo Julio | Wildlife Conservation Researcher",
    description: "Protecting Madagascar's unique biodiversity and endangered species through research and community engagement.",
    type: "website",
    locale: "en_US",
    siteName: "Tojo's Conservation Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDRIAMAHEFA Tojo Julio | Wildlife Conservation Researcher",
    description: "Madagascar conservation researcher protecting endemic species through research and community collaboration.",
    creator: "@tojoconservation",
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
