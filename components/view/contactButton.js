import { Button } from "@rneui/base";
import * as Contacts from 'expo-contacts';

const getStatus = {
	granted: async ({setState}) => {
		const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
		});
		setState({contacts: data});
	},
	denied: async ({setState, state }) => await setState({ ...state, contactError: "Permission to access contacts denied."}) 
};

const getContactPermission = (context) => {
		(async (context) => {
			const { status } = await Contacts.requestPermissionsAsync();

			await getStatus[status](context)
		})(context);
	};

const ContactButton = (context) =>
	<Button title={"Contact"} onPress={() => {
		getContactPermission(context)
	}}>
	</Button>;

export default ContactButton
