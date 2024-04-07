"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

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