import { Button } from "@rneui/themed";
import * as Contacts from 'expo-contacts';

const addContact = async () => {
    const contact = {
        [Contacts.Fields.FirstName]: 'Bird',
        [Contacts.Fields.LastName]: 'Man',
        [Contacts.Fields.Company]: 'Young Money',
      };
      const contactId = await Contacts.addContactAsync(contact);

      console.warn(contactId);
};

const AddContactButton = () =>
<Button
title="Add contact"
onPress={async () => {
  const contact = {
    [Contacts.Fields.FirstName]: "Test",
    [Contacts.Fields.LastName]: "McTest",
    [Contacts.Fields.PhoneNumbers]: [
      {
        number: "(123) 456-7890",
        isPrimary: true,
        digits: "1234567890",
        countryCode: "PA",
        id: "1",
        label: "main",
      },
    ],
    [Contacts.Fields.Emails]: [
      {
        email: "test@gmail.com",
        isPrimary: true,
        id: "2",
        label: "main",
      },
    ],
  };

  await Contacts.addContactAsync(contact)
    .then((contactId) => {
      alert("Se creó exitosamente");
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
}}>
</Button>
export default AddContactButton
