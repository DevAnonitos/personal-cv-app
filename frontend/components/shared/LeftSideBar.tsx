import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leftSideBarLinks } from '@/constants';

const LeftSideBar = () => {
  return (
    <div className='leftSideBar custom-scrollbar'>
      <div className='flex flex-col flex-1 gap-6 w-full p-3'>
        {leftSideBarLinks.map((link) => (
          <Link key={link.label} href={link.route} className={`leftsidebar_link bg-slate-100`}>
            <Image 
              src={link.imgUrl}
              alt={link.label}
              width={24}
              height={24}
            />
            <p className='text-light-1'>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;