// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Profile</Text>
      <Button title="Open Post" onPress={() => navigation.push('Post', { postId: 99 })} />
    </View>
  );
}
