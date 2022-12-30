import { Text } from "@rneui/themed";
import { View } from "react-native";
import AddContact from "./addContact";
import ContactButton from "./contactButton";
import RemoveContact from "./removeContact";

const Contact = (context) =>
  <>
    <View style={context.styles.contact}>
      <ContactButton {...context}></ContactButton>
      <Text>{context.state.contacts.length}</Text>
    </View>
    <View>
      <AddContact {...context}></AddContact>
      <RemoveContact {...context}></RemoveContact>
    </View>
  </>

export default Contact
