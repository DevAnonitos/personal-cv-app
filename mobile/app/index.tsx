import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router, Redirect, Link } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelCome = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView 
        contentContainerStyle={{
          height: "100%"
        }}
      >
        <View className='w-full flex justify-center items-center h-full px-4'>
          <Text className='text-white text-3xl'>
            Welcome page Page
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default WelCome