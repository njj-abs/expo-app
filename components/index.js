import { View } from "react-native";
import useStyles from "../styles"
import Theme from "./Theme";

const Component = () => {
	const styles = useStyles();

	return(
		<View style={ styles.container }>
		<Theme></Theme>
		</View>
	);
};

export default Component