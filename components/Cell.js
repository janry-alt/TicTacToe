import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Cell({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{value || ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 90, height: 90, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  text: { fontSize: 42 },
})