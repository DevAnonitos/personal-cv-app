'use client'; 

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className='flex justify-center h-screen flex-col items-center'>
      <h2 className='text-3xl text-red-600'>Something went wrong</h2>
      <Button 
        onClick={() => {
          reset();
        }}
        className='mt-4'
      >
        Please try again!
      </Button>
    </div>
  );
};

