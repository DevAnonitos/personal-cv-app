import React from 'react';
import { Text, ActivityIndicator, TouchableOpacity } from "react-native";

const CustomButton = () => {
  return (
    <TouchableOpacity className={`bg-secondary flex flex-row w-full mt-5 rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className='text-primary font-psemibold text-lg'>
        SignUp
      </Text>
      {/* <ActivityIndicator color="#fff" size="small" className=' ml-2' /> */}
    </TouchableOpacity>
  );
};

export default CustomButton;