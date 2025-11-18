// src/components/BottomTabBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, idx) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = state.index === idx;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() => {
              navigation.navigate(route.name);
            }}
          >
            <Text style={{ color: isFocused ? '#000' : '#888' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', height: 56, borderTopWidth: 0.5, borderColor: '#eee' },
  tab: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
