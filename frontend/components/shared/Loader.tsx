import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Image
        src="/assets/icons/loader.svg"
        width={44}
        height={44}
        alt='Loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loader;