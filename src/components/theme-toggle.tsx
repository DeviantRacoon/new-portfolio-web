"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            onClick={toggleTheme}
            className={cn("relative", className)}
          >
            {/* Sun/Moon swap with subtle animation */}
            <Sun
              className={cn(
                "transition-all duration-300",
                isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
              )}
            />
            <Moon
              className={cn(
                "absolute transition-all duration-300",
                isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
              )}
            />
            <span className="sr-only">Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isDark ? "Modo oscuro" : "Modo claro"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

