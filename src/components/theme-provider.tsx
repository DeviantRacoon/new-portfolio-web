"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Apply class to <html> and persist
  const apply = useCallback((t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    root.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, []);

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t);
      apply(t);
    },
    [apply]
  );

  const toggleTheme = useCallback(() => {
    const next: Theme = (typeof window !== "undefined" && document.documentElement.classList.contains("dark"))
      ? "light"
      : (typeof window !== "undefined" ? "dark" : (theme === "dark" ? "light" : "dark"));
    setTheme(next);
  }, [setTheme, theme]);

  // Initialize from storage or default to dark
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      const initial: Theme = stored === "light" || stored === "dark" ? stored : "dark";
      setThemeState(initial);
      apply(initial);
    } catch {
      setThemeState("dark");
      apply("dark");
    }
  }, [apply]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
