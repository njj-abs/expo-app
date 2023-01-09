import * as Contacts from 'expo-contacts';

const RemoveHelper = async (context) => {
	const { data } = await Contacts.getContactsAsync({
		fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
	});

	console.warn(data.length);

	return data.length === context.state.contacts.length;
};

export default RemoveHelper;
