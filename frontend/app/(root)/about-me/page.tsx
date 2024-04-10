import React from 'react';
import Image from "next/image";

const Page = () => {
  return (
    <section className='container_page'>
      {/* Banner AboutMe */}
      <div className='bannerAboutMeImage'>
        {/* Image Thumb Cover */}
        <Image
          src={"/assets/facebook.svg"}
          width={150}
          height={150}
          alt='Loading'
          className='object-contain'
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