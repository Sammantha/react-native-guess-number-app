import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ConfirmGameStart = props => {
	if (props.number) {
		return (
    		<View style={styles.view}>
    			<Text style={styles.title}>This is your chosen number: {props.number}</Text>
    			<View style={styles.button}>
    				<Button color={Colors.darkGreen} title="Start the Game"/>
    			</View>
    		</View>
    	);
	}
	return null;

};

const styles = StyleSheet.create({
	view: {
		marginVertical: 20,
		alignItems: 'center'
	},
	title: {
		fontSize: 18
	},
	button: {
		alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10
    }
});

export default ConfirmGameStart;