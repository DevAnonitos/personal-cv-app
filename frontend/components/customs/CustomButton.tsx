import React from 'react';
import { Button } from '../ui/button';

type ButtonCustomProps = {
  title: string;
  handlePress: () => void;
  otherStyle?: string;
  containerStyle?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({ 
  title, 
  handlePress, 
  otherStyle, 
  containerStyle, 
  textStyles,
  isLoading,
  ...props
}: ButtonCustomProps) => {
  return (
    <div>
      <Button 
        className={`
          flex items-center justify-center 
          ${containerStyle} ${isLoading ? "opacity-50" : ""}`
        }
        {...props}
      >
        <p className={`${textStyles}`}>
          {title}
        </p>
      </Button>
    </div>
  );
};

export default CustomButton;