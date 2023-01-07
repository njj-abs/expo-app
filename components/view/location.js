import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as ExpoLocation from 'expo-location';
import LocationMap  from './LocationMap';

const getStatus = {
	granted: async (context) => {
		const location = await ExpoLocation.getCurrentPositionAsync({});
		context.setState({
			...context.state,
			location,
		});
	},
	denied: async (context) => context.setState({
		...context.state,
		location: 'Permission to access location was denied',
	}),
};

const Location = (context) => {
	useEffect(() => {
		(async () => {
			const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
			await getStatus[status](context);

		})();
	}, []);

	return (
		<View >
			<Text >{JSON.stringify(context.state.location)}</Text>
			<LocationMap { ...context }></LocationMap>
		</View>
	);
};

export default Location;
