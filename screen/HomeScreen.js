import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Board from '../components/Board';
import { initialBoard, checkWinner, resetBoard, isBoardFull } from '../utils/gameLogic';  // Added isBoardFull import

export default function HomeScreen() {
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const onPressCell = (r, c) => {
    if (winner || board[r][c]) return;
    const newBoard = board.map(row => row.slice());
    newBoard[r][c] = turn;
    setBoard(newBoard);
    const w = checkWinner(newBoard);
    if (w) {
      setWinner(w);
    } else if (isBoardFull(newBoard)) {
      setWinner('Draw');
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const onReset = () => {
    setBoard(resetBoard());
    setTurn('X');
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Board board={board} onPressCell={onPressCell} />
      <Text style={styles.info}>{winner ? `Winner: ${winner}` : `Turn: ${turn}`}</Text>
      <Button title="Reset" onPress={onReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, marginBottom: 20 },
  info: { fontSize: 18, marginVertical: 12 },
});