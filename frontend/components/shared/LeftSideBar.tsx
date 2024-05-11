"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leftSideBarLinks } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

const LeftSideBar = () => {

  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className='leftSideBar custom-scrollbar dark:bg-[#161622] dark:border-gray-700'>
      <div className='flex flex-col flex-1 gap-6 w-full p-4'>
        {leftSideBarLinks.map((link) => { 
          const isActive =
          (pathName.includes(link.route) && link.route.length > 1)
          || pathName === link.route;

          return (
            <Link 
              key={link.label} 
              href={link.route} 
              className={`leftsidebar_link 
                ${isActive && 'bg-slate-100 dark:bg-[#FF9C01]'} hover:bg-slate-100 hover:dark:bg-[#FF9C01]
                transition-colors duration-200`
              }
            >
              <Image 
                src={link.imgUrl}
                alt={link.label}
                width={38}
                height={38}
                className='object-contain rounded-full bg-gray-200 p-2'
              />
              <p className={`text-md dark:text-white font-normal ${isActive ? "text-black font-semibold" : "text-slate-600"}`}>
                {link.label}
              </p>
            </Link>
        )})}
      </div>
    </div>
  );
};

export default LeftSideBar;