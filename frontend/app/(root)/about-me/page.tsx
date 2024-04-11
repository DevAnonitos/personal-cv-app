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
          className='object-contain rounded-full 
          max-md:w-[120px] max-md:h-[120px]'
        />
      </div>
      {/* Content About Me */}
      <div className='flex w-full flex-col items-center justify-center'>
        {/* Content */}
        <h2 className='text-3xl font-bold max-md:text-xl'>
          About me
        </h2>
        <div className='flex w-full flex-row mt-4 max-md:flex-col'>
          <div className='w-1/2 flex items-center justify-center max-md:w-full'>
            <Image 
              src="/assets/images/study.gif"
              alt='Study'
              width={350}
              height={350}
              className='object-contain max-md:w-[150px] max-md:h-[150px]'
            />
            {/* Social Icons */}
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