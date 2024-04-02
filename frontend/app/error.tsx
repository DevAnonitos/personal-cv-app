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
    <div className='flex justify-center items-center'>
      <h2 className='text-xl'>Something went wrong</h2>
      <Button 
        onClick={() => {
          reset();
        }}
      >
        Please try again!
      </Button>
    </div>
  );
};

