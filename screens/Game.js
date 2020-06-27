import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
 } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import ConfirmGameStart from '../components/ConfirmGameStart';

const Game = props => {

	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				 'Number has to be between 1 and 99',
				  [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]
			  );
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = selectedNumber;
	}

	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
		}}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						style={styles.input}
						onChangeText={numberInputHandler}
						value={enteredValue}/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								color={Colors.darkPink}
								title="Reset"
								onPress={resetInputHandler}/>
						</View>
						<View style={styles.button}>
							<Button
								color={Colors.darkGreen}
								title="Confirm"
								onPress={confirmInputHandler}/>
						</View>
					</View>
				</Card>
				<ConfirmGameStart number={confirmedOutput}/>
			</View>
		</TouchableWithoutFeedback>
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
		width: 100,
		textAlign: 'center'
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