import React from 'react';
import { View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Text } from '@rneui/themed';



const requestFilePermission = async (context) => {
	const permissions = await FileSystem.StorageAccessFramework
		.requestDirectoryPermissionsAsync(
			'content://com.android.externalstorage'
		);

	const files = await FileSystem.StorageAccessFramework.readDirectoryAsync(permissions.directoryUri);

	permissions.granted && context.setState({
		...context.state,
		files,
	});

};

const FileManager = (context) =>
	<View>
		<Button title="Open FileManager" onPress={() => requestFilePermission(context)} />
		{ context.state.files.map((file, key) =>
			<Text key={ key }>{ file }</Text>
		)}
	</View>;

export default FileManager;
