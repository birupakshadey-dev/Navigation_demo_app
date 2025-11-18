// src/screens/InboxScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function InboxScreen({ navigation }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Inbox</Text>
      <Button title="Open Chat" onPress={() => navigation.push('Chat', { chatId: 1 })} />
    </View>
  );
}
