import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router, Redirect, Link } from 'expo-router';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton } from '@/components';
import { images } from '@/constants';

const OnBoarding = () => {
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView 
        contentContainerStyle={{
          height: "100%"
        }}
      >
        {/*==================== Slider Screen============================= */}
        <View className='w-full flex justify-center items-center h-full px-4'>
          <Text className='text-4xl font-bold text-secondary-200'>
            DevHub
          </Text>
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[298px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">DevHub</Text>
            </Text>
          </View>

          <Text className='text-sm font-pregular mt-5 text-gray-100 text-center'>
            Where Creativity Community: Sharing your ideas with developers & contributors
            Exploration with DevHub.
          </Text>
          {/*==================== Slider Screen============================= */}
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyle='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default OnBoarding;