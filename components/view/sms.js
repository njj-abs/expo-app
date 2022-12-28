import { Button } from "@rneui/themed";
import { View } from "react-native";
import * as SMS from 'expo-sms';

const getAccessSMS = async () => {
	const isAvailable = await SMS.isAvailableAsync();

	isAvailable && await SMS.sendSMSAsync(
		[],
		'',
	);
};

const Sms = (context) =>
	<View>
		<Button title="SMS" onPress={() =>
			getAccessSMS(context)
		}></Button>
	</View>;

export default Sms
