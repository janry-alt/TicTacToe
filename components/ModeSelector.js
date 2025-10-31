import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ModeSelector = ({ gameMode, setGameMode }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button, gameMode === 'human' && styles.selected]}
      onPress={() => setGameMode('human')}
    >
      <Text style={styles.text}>Human vs Human</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, gameMode === 'ai' && styles.selected]}
      onPress={() => setGameMode('ai')}
    >
      <Text style={styles.text}>Human vs AI</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selected: {
    backgroundColor: '#007bff',
  },
  text: {
    fontSize: 16,
  },
});

export default ModeSelector;