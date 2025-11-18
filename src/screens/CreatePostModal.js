// src/screens/CreatePostModal.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CreatePostModal({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Create Post (Modal)</Text>
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
}
