"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from "react-icons/fi"

const SwitchThemes = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light"? "dark" : "light");
  };

  useEffect(() => 
    setMounted(true), 
  []);

  return (
    <div className='flex items-center justify-center p-4'>
      <button onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </div>
  );
};

export default SwitchThemes;