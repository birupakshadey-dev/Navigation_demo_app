// src/components/PostCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PostCard({ item, onOpen }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onOpen(item.id)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16, borderRadius: 8, overflow: 'hidden' },
  image: { width: '100%', height: 220 },
  title: { padding: 8, fontWeight: '700' },
});
