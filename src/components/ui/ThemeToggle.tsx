"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

export default function ThemeTogglebutton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="icon"
      className="rounded-full"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="scale-100 transition-all dark:scale-0" />
      <Moon className="absolute scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}