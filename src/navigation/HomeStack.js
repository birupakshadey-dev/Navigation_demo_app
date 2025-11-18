// src/navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeFeedScreen from '../screens/HomeFeedScreen';
import PostScreen from '../screens/PostScreen';
import CommentsScreen from '../screens/CommentsScreen';
import usePruneStack from '../utils/usePruneStack';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation, route }) {
  // Optional: prune stack inside this stack when too deep
  usePruneStack(navigation, 8); // keep last 8 entries

  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="HomeFeed" component={HomeFeedScreen} options={{ title: 'Feed' }} />
      <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
}
