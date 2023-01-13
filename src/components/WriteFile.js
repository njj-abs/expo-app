import { View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const writeFile = async (context) => {
	const result = await DocumentPicker.getDocumentAsync();
	
	await FileSystem.writeAsStringAsync(result.uri, 'write');
	
	const read = await FileSystem.readAsStringAsync(result.uri);

	context.setState({
		...context.state,
		files: {
			...context.state.files, 
			read, 
		}
	});
};

const WriteFile = (context) => 
	<View>
		<Button title='Write File' onPress={ () => {
			writeFile(context);
		} }></Button>
	</View>;

export default WriteFile;