import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import Colors from './constants/colors';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const[userNumber, setUserNumber] = useState();
	const[guessRounds, setGuessRounds] = useState(0);
	const[dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}
	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = numOfRounds => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGame onStartGame={startGameHandler}/>;

	if(userNumber && guessRounds <= 0) {
		content = <Game userNumber={userNumber} onGameOver={gameOverHandler}/>;
	} else if(guessRounds > 0) {
		content = <GameOver rounds={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
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
