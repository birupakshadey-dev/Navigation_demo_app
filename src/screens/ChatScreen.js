// src/screens/ChatScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function ChatScreen({ route }) {
  const chatId = route?.params?.chatId;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Chat {chatId}</Text>
    </View>
  );
}
