import { Button } from "@rneui/themed";
import * as Contacts from 'expo-contacts';

const removeContact = async (context) => {
    console.warn(context.state.contacts);
    console.warn(context.state.remove,'remove');

    console.warn(context.state.contacts.filter(({firstName} ) => firstName === context.state.remove), 'filer');
//     context.state.contacts.find(({phoneNumbers}) => 
//     phoneNumbers.some(({number}) => number === Number(context.state.remove))
// );
    const [{lookupKey}] = context.state.contacts.filter(({firstName} ) => firstName === context.state.remove);

    console.warn(lookupKey);
    await Contacts.removeContactAsync(lookupKey)
        .then((contactId) => {
            alert("removed successfully");
        })
        .catch((err) => {
            alert(err);
            console.log(err);
        });
};

const RemoveContactButton = (context) =>
    <Button title="Remove Contact" onPress={async () =>
        await removeContact(context)
    }></Button>;

export default RemoveContactButton
