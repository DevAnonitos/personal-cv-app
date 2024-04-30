import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';

import { useForm, Controller } from "react-hook-form";
import { CustomButton, FormField } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidation } from '@/libs/validations/user';

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

    if(username === "" || email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      
    } catch (error) {
      
    } finally {

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

          <FormField 
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='mt-10'
            placeholder='Enter your username'
          />

          <FormField 
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            placeholder='Enter your email'
            keyboardType="email-address"
          />

          <FormField 
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder='Enter your password'
          />

          <CustomButton
            title='Sign Up'
            handlePress={handleSubmit(onSubmit)}
            containerStyle='w-full mt-7'
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