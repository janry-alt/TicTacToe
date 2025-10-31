import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DifficultySelector = ({ difficulty, setDifficulty }) => (
  <View style={styles.container}>
    {['easy', 'medium', 'hard'].map((diff) => (
      <TouchableOpacity
        key={diff}
        style={[styles.button, difficulty === diff && styles.selected]}
        onPress={() => setDifficulty(diff)}
      >
        <Text style={styles.text}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    padding: 8,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selected: {
    backgroundColor: '#007bff',
  },
  text: {
    fontSize: 14,
  },
});

export default DifficultySelector;