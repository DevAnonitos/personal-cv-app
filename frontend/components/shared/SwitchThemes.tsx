"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {  SunIcon, MoonIcon  } from "@radix-ui/react-icons";


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
        {theme === "light" ? 
          <MoonIcon height={20} width={20} /> 
          : 
          <SunIcon height={20} width={20} />
        }
      </button>
    </div>
  );
};

export default SwitchThemes;