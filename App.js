import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Game from './screens/Game';
import Colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue
  },
});
