import React from 'react';
import { Button } from '@rneui/themed';
import * as Contacts from 'expo-contacts';

const removeContact = async (context) => {
	console.warn(context.state.contacts[0]);

	const contactId = await Contacts.removeContactAsync(context.state.contacts[0].id);

	console.warn(contactId);

};

const RemoveContactButton = (context) =>
	<Button title="Remove Contact" onPress={async () =>
		await removeContact(context)
	}></Button>;

export default RemoveContactButton;
