import { Text } from "@rneui/themed";
import { View } from "react-native";
import ContactButton from "./contactButton";

const Contact = (context) =>
  <View style={ context.styles.contact}>
    <ContactButton { ...context }></ContactButton>
    <Text>{context.state.contacts.length}</Text>
  </View>;

export default Contact
