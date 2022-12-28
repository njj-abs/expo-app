import { Text } from "@rneui/themed";
import ContactButton from "./contactButton";

const Contact = (context) =>
  <>
    <ContactButton { ...context }></ContactButton>
    <Text>{context.state.contacts.length}</Text>
  </>;

export default Contact
