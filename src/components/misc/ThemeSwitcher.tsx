import React from "react";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";

export const ThemeSwitcher = ({ noTabIndex = false }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="group relative rounded-full text-gray-800 dark:text-white"
      tabIndex={noTabIndex ? -1 : 0}
      onClick={(e) => {
        e.preventDefault();
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {resolvedTheme === "light" ? (
        <HiMoon
          size={24}
          className="inline-block group-hover:text-soft-blue-100"
        />
      ) : (
        <HiSun
          size={24}
          className="inline-block group-hover:text-soft-blue-100"
        />
      )}
    </button>
  );
};
