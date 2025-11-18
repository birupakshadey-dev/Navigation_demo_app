// src/screens/PostScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

/**
 * Hybrid Post screen:
 * - When opened via push(route param postId) each push creates a new screen instance => native iOS swipe/pop works
 * - User can also navigate between posts in-place via setState (fast, no new stack entries)
 */

export default function PostScreen({ route, navigation }) {
  const pushedId = route?.params?.postId ?? 1;
  const [postId, setPostId] = useState(pushedId);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sync when this instance receives new route param
  useEffect(() => setPostId(pushedId), [pushedId]);

  const fetchPost = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.warn(err);
      setData({ title: 'Error', body: 'Unable to fetch' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPost(postId);
  }, [postId, fetchPost]);

  // Optional: handle focus to refresh (useFocusEffect)
  useFocusEffect(
    React.useCallback(() => {
      // refresh when focused if needed
      return () => {};
    }, [postId])
  );

  // open comments as a push screen
  const openComments = () => navigation.push('Comments', { postId });

  // open next as push (creates new stack entry => iOS swipe supported)
  const openNextAsPush = () => navigation.push('Post', { postId: postId + 1 });

  // open next in-place (no stack growth)
  const openNextInPlace = () => setPostId((p) => p + 1);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={{ marginVertical: 12 }}>{data?.body}</Text>

      <Button title="Open Comments (push)" onPress={openComments} />

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <TouchableOpacity style={styles.btn} onPress={openNextAsPush}>
          <Text style={styles.btnText}>Next (push)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { marginLeft: 12 }]} onPress={openNextInPlace}>
          <Text style={styles.btnText}>Next (in-place)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: '700' },
  btn: { padding: 10, backgroundColor: '#007bff', borderRadius: 8 },
  btnText: { color: '#fff' },
});
