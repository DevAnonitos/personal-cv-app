import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect, router } from 'expo-router';
import { View, Text, ScrollView, Image } from 'react-native';


const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;