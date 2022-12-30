import React from 'react';
import { Button } from '@rneui/themed';
import * as Contacts from 'expo-contacts';

const addContact = async () => {
	const contact = {
		[Contacts.Fields.FirstName]: 'A',
		[Contacts.Fields.LastName]: 'Man',
		[Contacts.Fields.Company]: 'Young Money',
		[Contacts.Fields.PhoneNumbers]: [
			{
				id: String(Math.random()).slice(2),
				label: 'person',
				countryCode: '+91',
				number: '1234567890',
			}
		]
	};

	await Contacts.presentFormAsync(null,contact)
		.then((contactId) => {
			alert('Add Successfully' + contactId);
		})
		.catch((err) => {
			alert(err);
			console.log(err);
		});
};

const AddContactButton = () =>
	<Button
		title="Add contact"
		onPress={async () => await addContact()}>
	</Button>;
export default AddContactButton;
