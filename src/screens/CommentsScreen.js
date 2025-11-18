// src/screens/CommentsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function CommentsScreen({ route }) {
  const postId = route?.params?.postId;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Comments for post {postId}</Text>
    </View>
  );
}
