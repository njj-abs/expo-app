import React, { useState } from 'react';
import {  View } from 'react-native';
import Examples from './Examples';
import useStyles from './styles';


const getState = { 
	contacts: [], 
	location: {
		error: '',
		data:'Loading...'
	},
	files: []
};

const Component = () => {
	const styles = useStyles();
	const [ state, setState ] = useState(getState);

	const context = { state, setState, styles };

	return(
		<View style={ styles.container }>
			{ Examples.map((Example, key) =>
				<Example key={ key } { ...context }/>
			)}
		</View>
	);
};

export default Component;