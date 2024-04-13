import React from 'react';
import { router, Redirect } from 'expo-router';
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
        <View className=''>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WelCome