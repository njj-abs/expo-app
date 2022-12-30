import React from 'react';
import { Input } from '@rneui/themed';
import { View } from 'react-native';
import RemoveContactButton from './removeContactButton';

const RemoveContact = (context) =>
	<View>
		<Input placeholder="Remove contact by number" onChangeText={(value) =>{
			context.setState( { ...context.state, remove: value });
		}}>
		</Input>
		<RemoveContactButton { ...context }></RemoveContactButton>
	</View>;

export default RemoveContact;
