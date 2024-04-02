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
    <div>
      <h2>Something went wrong</h2>
      <Button 
        onClick={() => {
          reset();
        }}
      >
        Please try again
      </Button>
    </div>
  )
}

