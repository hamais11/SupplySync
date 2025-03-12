"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function TeamSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="text-blue-500 dark:text-blue-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light"? <Moon/>: <Sun/>}
    </button>
  );
}
