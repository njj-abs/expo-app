import React from 'react';
import { Button, useThemeMode } from '@rneui/themed';

const Theme = () => {
	const { setMode, mode } = useThemeMode();

	const handleOnPress = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button onPress={handleOnPress}>Switch Theme</Button>
	);
};

export default Theme;
