import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image,
  ViewStyle, 
  TextInputProps
} from 'react-native';

import { icons } from '@/constants';

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
};

const FormField = ({ 
  title, 
  value, 
  placeholder, 
  handleChangeText, 
  otherStyles, 
  ...props 
}: FormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>
        {title}
      </Text>
      <View 
        className='w-full h-16 bg-black-100 rounded-2xl border-2 
        border-black-100 focus:border-secondary 
        flex flex-row items-center'
      >
        <TextInput
          className='flex-1 text-white font-psemibold text-base p-3'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 mx-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;