import 'expo-dev-client';
import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Component from './src/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const theme = createTheme({
	lightColors: {},
	darkColors: {},
});

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<ScrollView>
					<Component />
				</ScrollView>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
