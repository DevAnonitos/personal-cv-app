"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import SwitchThemes from './SwitchThemes';
import SignDialogButton from './SignInDialogButton';

const TopBar = () => {
  return (
    <nav className='topBar'>
      <div className='flex items-center justify-between gap-x-4 p-4 w-full h-full max-md:p-6'>
        <Link href="/" className='flex gap-2 items-center justify-center'>
          <Image 
            src="/assets/images/logoAvt.png"
            alt='logo'
            width={40}
            height={40}
            className='object-contain rounded-full'
          />
          <p className='logo_text'>DevAnonitos</p>

        </Link>

        <div className='flex items-center justify-center'>
          <SearchBar />
        </div>

        <div>
          {/* <SwitchThemes /> */}
          <SignDialogButton />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;