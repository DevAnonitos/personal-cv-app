import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  FlatList, 
  Image, 
  RefreshControl, 
  Text, 
  View 
} from 'react-native';

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView className='bg-primary'>
      
    </SafeAreaView>
  );
};

export default Home;