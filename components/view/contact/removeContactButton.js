import React from 'react';
import { Button } from '@rneui/themed';
import * as Contacts from 'expo-contacts';
import RemoveHelper from "../../../services/RemoveHelper";

const removeContact = async (context) => {
	console.warn(context.state.contacts[0]);

	await Contacts.removeContactAsync(context.state.contacts[0].id);
	await RemoveHelper(context)
		? alert('Removed successfully')
		: alert('Invalid Contact')

};

const RemoveContactButton = (context) =>
	<Button title="Remove Contact" onPress={async () =>
		await removeContact(context)
	}></Button>;

export default RemoveContactButton;
