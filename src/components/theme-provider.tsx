"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="portfolio-theme"
      themes={["light", "dark"]}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    if (mounted && resolvedTheme) {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    }
  };

  return {
    theme: (resolvedTheme || "light") as "light" | "dark",
    setTheme: setTheme,
    toggleTheme: handleToggleTheme,
    isDark: resolvedTheme === "dark",
    mounted,
  };
}
