// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import CreatePostModal from '../screens/CreatePostModal';
import PostScreen from '../screens/PostScreen';

const Root = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />

      {/* Modal (presented over tabs) */}
      <Root.Screen
        name="CreatePostModal"
        component={CreatePostModal}
        options={{ presentation: 'modal', headerShown: false }}
      />

      {/* Allow deep-links to Post as a root modal if desired */}
      <Root.Screen name="PostRoot" component={PostScreen} options={{ headerShown: false }} />
    </Root.Navigator>
  );
}
