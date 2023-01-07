import React from 'react';
import { View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';



const requestFilePermission = async () => {
	const permissions =
	await FileSystem.StorageAccessFramework
		.requestDirectoryPermissionsAsync(
			'content://com.android.externalstorage'
		);

	console.warn(permissions);
};

const FileManager = () =>  {
	console.warn(true);
	return (
		<View>
			<Button title="Open FileManager" onPress={requestFilePermission} />
		</View>
	);
};

export default FileManager;
