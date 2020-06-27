import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
	return (
		<View style={styles.view}>
			<Text style={styles.title}>Guess A Number Game</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: Colors.pink,
		paddingVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 90
	},
	title: {
		fontSize: 18
	}
});

export default Header;