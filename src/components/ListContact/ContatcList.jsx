import React from 'react';
import css from "./ContactList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'store/contacts/actions';
const ContactList = () => {
  const filter = useSelector((state) => state.filter);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    const deleteC = (contacts.contacts.filter(contact => contact.id !== contactId));
    dispatch(deleteContacts(deleteC)); // Видалити контакт через диспетчер
  };
  const newFilteredContacts = filter
  ? contacts.contacts.filter((contact) => contact.name.toLowerCase().includes((filter.filter.toLowerCase())))
  : contacts.contacts;
  return (
    newFilteredContacts.length > 0 && <ul>
    {newFilteredContacts.map(({name,id, number}) => (
      <li key={id} className={css.itemList}>
        {name}: {number}
        <button onClick={()=> deleteContact(id)} className={css.btn}>Delete</button>
      </li>
    ))}
  </ul>
  );
};

export default ContactList;
