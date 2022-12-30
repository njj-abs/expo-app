import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@rneui/base';

const delay = 6000;

const IncreaseCount = ({ styles, state, setState }) => {
	useEffect(() => {
		setInterval(() => {
			setState((data) => ({ count: data.count + 1 }));
		}, delay);
	}, []);

	return(
		<View>
			<Text style={styles.text}>{state.count}</Text>
			<Button title='IncreaseCount' color={'red'} onPress={() => setState({ count: state.count + 1 })}/>
		</View>
	);
};

export default IncreaseCount;
