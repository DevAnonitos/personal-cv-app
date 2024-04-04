"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
  return (
    <nav className='topBar'>
      <div className='flex items-center justify-between gap-x-4 p-4 w-full h-full '>
        <Link href="/" className='flex gap-2 items-center justify-center'>
          <Image 
            src="./assets/images/logo.svg"
            alt='logo'
            width={40}
            height={40}
            className='object-contain'
          />
          <p>DevAnonitos</p>
        </Link>

        <div>
          Search
        </div>

        <div>
          profile
        </div>
      </div>
    </nav>
  );
};

export default TopBar;