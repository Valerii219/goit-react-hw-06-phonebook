import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ListContact/ContatcList";
// import {useSelector, useDispatch} from 'react-redux'


export const App = () => {
  const filter = useSelector((state) => state.filter);
  return (
    <div style={{ padding: "35px" }}>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
      { filter && <ContactList />}
  <Filter />
    </div>
  );
};


// const storedContacts = JSON.parse(localStorage.getItem("contacts"));

  // const [contacts, setContacts] = useState( []);
 





 
  // const handleAddContact = (newContact) => {
  //   const sameContact = contacts.find((contact) => contact.name === newContact.name);

  //   if (sameContact) {
  //     alert(`${sameContact.name} is already in contacts`);
  //     return;
  //   }

  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };

  
