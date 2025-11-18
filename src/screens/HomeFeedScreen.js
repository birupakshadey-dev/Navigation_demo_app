// src/screens/HomeFeedScreen.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

const samplePosts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 1}/400/300`,
}));

export default function HomeFeedScreen({ navigation }) {
  const openPost = (postId) => {
    navigation.push('Post', { postId });
  };

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={samplePosts}
      keyExtractor={(i) => i.id.toString()}
      renderItem={({ item }) => <PostCard item={item} onOpen={openPost} />}
    />
  );
}
