import React from 'react';
import Image from "next/image";

const Page = () => {
  return (
    <section className='container_page'>
      {/* Banner AboutMe */}
      <div className='bannerAboutMeImage'>
        <Image
          src={"/assets/images/logo.jpg"}
          width={150}
          height={150}
          alt='Loading'
          loading='lazy'
          className='object-contain rounded-full border 
          border-slate-600 max-md:w-[120px] max-md:h-[120px]'
        />
      </div>
        
      <div className='flex w-full flex-col items-center justify-center'>
        {/* Content */}
        <h2 className='text-3xl font-bold'>
          About me
        </h2>
        <div className='flex w-full flex-row bg-slate-200 mt-4 max-md:flex-col'>
          <div className='w-1/2 max-md:w-full bg-red-300'>
            h1
          </div>
          <div className='w-1/2 max-md:w-full bg-blue-500'>
            h2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;