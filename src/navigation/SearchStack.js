// src/navigation/SearchStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
