import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Game = props => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Text>Select a Number</Text>
			<TextInput style={styles.input}/>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title="Reset" />
				<Button style={styles.button} title="Confirm"/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 20
	},
	input: {
		width: 300,
		maxWidth: '80%',
		borderColor: 'black',
		borderBottomWidth: 1,
		marginVertical: 20
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '40%',
		justifyContent: 'space-between'
	},
	button: {
		color: '#a6c19a',
		borderRadius: 15,
		width: 200
	}
});

export default Game;