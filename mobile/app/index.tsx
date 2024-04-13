import React from 'react';
import { router, Redirect, Link } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const WelCome = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView 
        contentContainerStyle={{
          height: "100%"
        }}
      >
        <View className='flex-1 items-center justify-center bg-white'>
          <Text className='text-3xl'>DevHub</Text>
          <StatusBar style='auto' />
          <Link href="/modal" style={{ color: "blue" }}>
            Goto modals 
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WelCome