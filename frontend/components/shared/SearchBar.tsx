"use client";

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SearchBar = () => {

  

  return (
    <div className='flex w-full max-w-xl justify-center items-center space-x-0 max-md:hidden'>
      <Input 
        className='flex h-10 border border-slate-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8' 
        type='search' 
        placeholder='Search for content...' 
      />
      <Button className='rounded-lg rounded-l-none h-10' type='submit'>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;