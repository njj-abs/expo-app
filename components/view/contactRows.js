import {  View, Text } from 'react-native';

const ContactRows = (context) => 
	context.state.contacts.map((contact, index) => {
		return (
			<View key={index} >
				<Text>Name: {contact.firstName} {contact.lastName}</Text>
			</View>
		);
	});

export default ContactRows
