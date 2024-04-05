import React from 'react';
import { socialMediaLinks } from '@/constants';

const BottomBar = () => {
  return (
    <div className='bottomBar'>
      <div className='flex bg-gray-300 justify-between w-full'>
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
        <div>
          Social Media
        </div>
      </div>
    </div>
  );
};

export default BottomBar;