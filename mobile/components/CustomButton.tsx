import React from 'react';
import { Text, ActivityIndicator, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({ 
  title, 
  handlePress, 
  containerStyle,
  textStyles, 
  isLoading 
}: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyle} ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator 
          color="#fff" 
          size="small" 
          className=' ml-2' 
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;