import React from 'react';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image, Text, View } from 'react-native';

import { icons } from '@/constants';
import { Loader } from '@/components';

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className='flex items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text 
        className={`
          ${focused ? "font-psemibold" : "font-pregular"} 
          text-xs`
        }
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  

  return (
    <Tabs
      screenOptions={{
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          
        }}
      />
    </Tabs>
  );
}
