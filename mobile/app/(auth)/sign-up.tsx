import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';

import { useForm, Controller } from "react-hook-form";
import { CustomButton, FormField } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidation } from '@/libs/validations/user';

import { firebaseAuth } from '@/libs/firebase/firebaseConfig';

const SignUp = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    getValues 
  } = useForm({
    resolver: yupResolver(signUpValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    const { username, email, password } = getValues();

    router.replace("/home");
    if(username === "" || email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);
    try {
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View 
          className='w-full flex justify-center 
          items-center h-full px-4 my-6'
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className='text-4xl font-bold text-secondary-200'>
            DevHub
          </Text>
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to DevHub
          </Text>

          <Controller
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <FormField 
                title='Username'
                value={value}
                onBlur={onBlur}
                handleChangeText={onChange}
                otherStyles='mt-10'
                placeholder='Enter your username'
              />
            )}
            name='username'
          />
          {<Text className='text-red-500 mt-2 w-full'>{errors.username?.message}</Text>}

          <Controller
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <FormField 
                title='Email'
                value={value}
                onBlur={onBlur}
                handleChangeText={onChange}
                otherStyles='mt-3'
                placeholder='Enter your email'
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
                otherStyles='mt-3'
                placeholder='Enter your password'
              />
            )}
            name='password'
          />
          {<Text className='text-red-500 mt-2 w-full'>{errors.password?.message}</Text>}

          <CustomButton
            title='Sign Up'
            handlePress={handleSubmit(onSubmit)}
            containerStyle='w-full mt-3'
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;