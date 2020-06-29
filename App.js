import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import Colors from './constants/colors';
import Game from './screens/Game';

export default function App() {
	const[userNumber, setUserNumber] = useState();

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGame onStartGame={startGameHandler}/>;

	if(userNumber) {
		content = <Game userChoice={userNumber}/>;
	}

  return (
    <View style={styles.container}>
      <Header/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue
  },
});
