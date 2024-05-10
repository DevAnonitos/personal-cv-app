import React from 'react';
import { linkTags } from '@/constants';
import { Button } from '../ui/button';

const TagButton = () => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
      {linkTags.map((tag, index) => (
        <Button variant="outline" key={index} className='font-semibold'>
          {tag.text}
        </Button>
      ))}
    </div>
  );
};

export default TagButton;