import { useState } from "react";
import {  View } from "react-native";
import useStyles from "./styles"
import Theme from "./Theme";
import Contact from "./view/contact";
import Location from "./view/location";
import Sms from "./view/sms";

const Component = () => {
	const styles = useStyles();
	const [ state, setState ] = useState({ contacts:[], location: 'Waiting...'});

	const context = { state, setState, styles }

	return(
		<View style={ styles.container }>
			<Theme></Theme>
			<Contact {...context}></Contact>
			<Sms {...context}></Sms>
			<Location {...context}></Location>
		</View>
	);
};

export default Component