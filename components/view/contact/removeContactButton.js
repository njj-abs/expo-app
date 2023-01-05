import { Button } from "@rneui/themed";
import * as Contacts from 'expo-contacts';

const removeContact = async (context) => {
    console.warn(context.state.contacts[0]);
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
    const contactId = await Contacts.removeContactAsync(context.state.contacts[0].id);

    console.warn(contactId);

};

const RemoveContactButton = (context) =>
    <Button title="Remove Contact" onPress={async () =>
        await removeContact(context)
    }></Button>;

export default RemoveContactButton
