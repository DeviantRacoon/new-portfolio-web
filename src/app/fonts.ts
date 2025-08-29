import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "700", "900"],
  fallback: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

