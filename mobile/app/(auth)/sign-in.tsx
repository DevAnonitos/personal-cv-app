import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';

import { useForm, Controller } from "react-hook-form";
import { CustomButton, FormField } from '@/components';

import { yupResolver } from "@hookform/resolvers/yup";
import { signInValidation } from '@/libs/validations/user';

import { firebaseAuth } from '@/libs/firebase/firebaseConfig';

const SignIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  // const auth = firebaseAuth;

  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    getValues
  } = useForm({
    resolver: yupResolver(signInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    try {
      const { email, password } = getValues();

      
      router.replace("/home");
    } catch (error) {
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View 
          className='w-full flex justify-center items-center h-full px-4 my-6' 
          style={{ 
            minHeight: Dimensions.get("window").height - 100
          }}
        >
          <Text className='text-4xl font-bold text-secondary-200'>
            DevHub
          </Text>
          <Text className="text-2xl font-semibold text-white mt-7 font-psemibold">
            Log in to DevHub
          </Text>
          
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title='Email'
                value={value}
                onBlur={onBlur}
                handleChangeText={onChange}
                otherStyles='mt-3'
                placeholder='Enter your email address'
                keyboardType="email-address"
              />
            )}
            name='email'
          />
          {<Text className='text-red-500 mt-2 w-full'>{errors.email?.message}</Text>}


          <Controller
            control={control}
            render={({ field: { value, onBlur, onChange } }) => (
              <FormField 
                title='Password'
                value={value}
                onBlur={onBlur}
                handleChangeText={onChange}
                otherStyles="mt-3"
                placeholder='Enter your password'
              />
            )}
            name='password'
          />
          {<Text className='text-red-500 mt-2 w-full'>{errors.password?.message}</Text>}

          <CustomButton
            title='Sign In'
            handlePress={handleSubmit(onSubmit)}
            containerStyle='mt-7 w-full'
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;