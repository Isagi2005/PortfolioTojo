"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme();
  return {
    theme: (theme || "light") as "light" | "dark",
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
