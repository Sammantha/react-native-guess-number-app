import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const Game = props => {
	const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userNumber));

	const currentMin = useRef(1);
	const currentMax = useRef(100);

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < props.userNumber)
			 ||
			(direction === 'greater' && currentGuess > props.userNumber)
			){
				Alert.alert(
					'Don\'t cheat!',
					'This app is smarter than you think!',
				    [{text: 'Ok', style: 'cancel'}]
			    );
			    return;
		}
		if(direction === 'lower') {
			currentMax.current = currentGuess;
		} else {
			currentMin.current = currentGuess;
		}
		const nextNumber = generateRandomBetween(currentMin.current, currentMax.current, currentGuess);
		setCurrentGuess(nextNumber);
	};

	return(
		<View style={styles.screen}>
			<Text>Opponent's Guess: {currentGuess}</Text>
			<Card style={styles.buttonContainer}>
				<Button title="Too Low" onPress={nextGuessHandler.bind(this, 'greater')}/>
				<Button title="Too High" onPress={nextGuessHandler.bind(this, 'lower')}/>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	}
});

export default Game;