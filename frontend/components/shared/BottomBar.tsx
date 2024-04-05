import React from 'react';
import { socialMediaLinks } from '@/constants';
import Image from 'next/image';
import { Button } from '../ui/button';

const BottomBar = () => {
  return (
    <div className='bottomBar'>
      <div className='flex justify-between w-full'>
        {/* Des Creator */}
        <div className='flex flex-col'>
          <h1>
            Design by: <a href="https://www.facebook.com/baonguyenno1412/" className='text-blue-500 font-bold text-lg'>DevAnonitos</a>
          </h1>
          <p>
            Copyright &copy;2024 - v1.0
          </p>
        </div>
        {/* Link Reference */}
        <div>
          Link Reference
        </div>
        {/* Link social Media */}
        <div className='flex flex-row items-center justify-center max-md:hidden'>
          {socialMediaLinks.map((link) => (
            <Button variant="secondary" key={link.label} className='button_social'>
              <a href={link.linkUrl} target='_blank'>
                <Image
                  src={link.imgUrl}
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