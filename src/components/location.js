import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as ExpoLocation from 'expo-location';
import { Text } from '@rneui/themed';

const statusData = {
	granted: async (context) => {
		const location = await ExpoLocation.getCurrentPositionAsync({
			accuracy: ExpoLocation.Accuracy.BestForNavigation,
		});
		context.setState({
			...context.state,
			location:{ data: location},
		});
	},
	denied: async (context) => context.setState({
		...context.state,
		location: { error: 'Permission to access location was denied'},
	}),
};

const Location = (context) => {
	const { state: { location: { data, error } } } = context;

	useEffect(() => {
		(async () => {
			const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
			await statusData[status](context);

		})();
	}, []);


	return (
		<View >
			<Text >{JSON.stringify(error ? error: data)}</Text>
		</View>
	);
};

export default Location;
