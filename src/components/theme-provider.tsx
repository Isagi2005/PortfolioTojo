"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="portfolio-theme"
      themes={["light", "dark"]}
      disableTransitionOnChange={false}
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
  
  return {
    theme: (resolvedTheme || "light") as "light" | "dark",
    setTheme: setTheme,
    toggleTheme: () => {
      const currentTheme = resolvedTheme || "light";
      setTheme(currentTheme === "dark" ? "light" : "dark");
    },
    isDark: resolvedTheme === "dark",
  };
}
