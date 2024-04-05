import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { socialMediaLinks, linkReferences } from '@/constants';

const BottomBar = () => {
  return (
    <div className='bottomBar'>
      <div className='flex justify-between w-full max-md:flex-col'>
        {/* Des Creator */}
        <div className='flex flex-col'>
          <h1 className='text-md font-medium text-slate-600'>
            Designed and developed by:  
            <a 
              href="https://www.facebook.com/baonguyenno1412/" 
              className='font-bold text-md text-black tracking-wide'
            >
              DevAnonitos
            </a>
          </h1>
          <p className='text-sm font-normal text-slate-600'>
          All rights reserved. Copyright &copy;2024 - v1.0
          </p>
        </div>
        {/* Link Reference */}
        <div className='flex items-center justify-center max-md:mt-2'>
          {linkReferences.map((link) => (
            <div key={link.label} className='mx-2 text-md font-normal text-slate-600 hover:underline cursor-pointer max-md:text-sm'>
              {link.label}
            </div>
          ))}
        </div>
        {/* Link social Media */}
        <div className='flex flex-row items-center justify-center max-md:hidden'>
          {socialMediaLinks.map((socialLink) => (
            <Button variant="secondary" key={socialLink.label} className='button_social'>
              <a href={socialLink.linkUrl} target='_blank'>
                <Image
                  src={socialLink.imgUrl}
                  width={25}
                  height={25}
                  alt='Social Media'
                  className='object-contain'
                />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;