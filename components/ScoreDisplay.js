import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreDisplay({ scores = { X: 0, O: 0, draw: 0 } }) {
  return (
    <View style={styles.row}>
      <View style={styles.block}>
        <Text style={styles.label}>X</Text>
        <Text style={styles.value}>{scores.X}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>O</Text>
        <Text style={styles.value}>{scores.O}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Draw</Text>
        <Text style={styles.value}>{scores.draw}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-around', width: '90%' },
  block: { alignItems: 'center', padding: 8 },
  label: { fontSize: 14, color: '#444' },
  value: { fontSize: 20, fontWeight: '700' },
});