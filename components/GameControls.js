import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function GameControls({ onRestart = () => {} }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { marginTop: 20 },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#2e86de',
    borderRadius: 6,
  },
  buttonText: { color: 'white', fontWeight: '600' },
});