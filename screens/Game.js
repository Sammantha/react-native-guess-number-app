import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const Game = props => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput style={styles.input}/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}><Button color={Colors.darkPink} title="Reset" /></View>
					<View style={styles.button}><Button color={Colors.darkGreen} title="Confirm"/></View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	title: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 20
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
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
		width: '80%',
		justifyContent: 'space-between'
	},
	button: {
		borderRadius: 10,
		width: 100
	}
});

export default Game;