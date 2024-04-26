import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';

import { signInValidation } from '@/libs/validations/user';
import { useForm, Controller } from "react-hook-form";
import { CustomButton, FormField } from '@/components';

const SignIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {

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

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles='mt-7'
            placeholder='Enter your email address'
          />

          <FormField 
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder='Enter your password'
          />

          <CustomButton
            title='Sign In'
            handlePress={handleSubmit}
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