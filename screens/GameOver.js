import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = props => {
	return (
		<View style={styles.view}>
			<Text>The Game is Over!</Text>
			<Text>Number of rounds: {props.rounds}</Text>
			<Text>The number was: {props.userNumber}</Text>
			<Button title="New Game" onPress={props.onRestart}/>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default GameOver;