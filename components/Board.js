import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

export default function Board({ board, onPressCell }) {
  return (
    <View style={styles.board}>
      {board.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((val, c) => (
            <Cell key={c} value={val} onPress={() => onPressCell(r, c)} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: { },
  row: { flexDirection: 'row' },
});