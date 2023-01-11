import { View } from 'react-native';
import React from 'react';
import { Button, Text } from '@rneui/themed';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const pickDocument = async (context) => {
	const result = await DocumentPicker.getDocumentAsync();
	const read = await FileSystem.readAsStringAsync(result.uri);


	console.warn({read}, );
	context.setState({
		...context.state,
		files: {
			...context.state.files, 
			read, 
		}
	});
};

const ReadFile = (context) => {
	return (
		<View>
			<Button title="Read Document" onPress={ () => 
				pickDocument(context)} />
			{ context.state.files.read && 
					<Text>{`read: ${ context.state.files.read }`}</Text>
			}
		</View>
	);
};

export default ReadFile;