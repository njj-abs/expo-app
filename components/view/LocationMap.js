import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationMap = () =>  {
	return (
		<View style={styles.container}>
			<MapView style={styles.map} 
				initialRegion={{
					latitude: 12.9564672,
					longitude: 80.2422784,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}} >
				<Marker coordinate={{
					latitude: 12.9564672,
					longitude: 80.2422784,
				}}></Marker>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '50%',
	},
});

export default LocationMap;
