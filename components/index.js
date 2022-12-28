import { useState } from "react";
import {  View } from "react-native";
import useStyles from "./styles"
import Theme from "./Theme";
import Contact from "./view/contact";
import Sms from "./view/sms";

const Component = () => {
	const styles = useStyles();
	const [ state, setState ] = useState({contacts:[]});

	const context = { state, setState, styles }

	return(
		<View style={ styles.container }>
		<Theme></Theme>
		<Contact {...context}></Contact>
		<Sms {...context}></Sms>
		</View>
	);
};

export default Component