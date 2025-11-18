// src/navigation/ReelsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReelsScreen from '../screens/ReelsScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

export default function ReelsStack() {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="Reels" component={ReelsScreen} />
      <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
