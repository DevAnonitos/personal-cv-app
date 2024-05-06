"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      <div className="dark:text-white dark:bg-secondary transition-colors duration-200 min-h-screen">
        {children}
      </div>
    </NextThemesProvider>
)
};

export default ThemeProvider;