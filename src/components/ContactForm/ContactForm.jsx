import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { createContacts } from "store/contacts/actions";
import { createFilter} from "store/filter/actions";



const ContactForm =() =>{
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  console.log('contacts :>> ', contacts);
  const dispatch = useDispatch();
 

  

  const deleteContact = (contactId) => {
    const deleteC = (contacts.contacts.filter(contact => contact.id !== contactId));
    dispatch({ type: 'deleteContact', payload: deleteC }); // Видалити контакт через диспетчер
  };
  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== contactId)
  //   );
  // };

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (e)=>{    
    setName ( e.target.value
            )}

    const handleChangeNumber = (e)=>{
      setNumber( e.target.value)
                    }

  const handleSubmit = (e)=>{
    e.preventDefault()
      if(name === "" || number === "")
      {return
      }
  
    const newContact = {
    id:nanoid(),
    name:name,
    number:number,
      };
    
    dispatch(createContacts(newContact));
    
    setName('');
    setNumber('');
  }      

  const handleChangeFilter = (e) => {
    const newFilterValue = e.currentTarget.value.toLowerCase();
    
    dispatch(createFilter(newFilterValue));
    // dispatch(createFilteredContacts(newFilteredContacts)); // removed this line from here
  };

  const newFilteredContacts = filter
  ? contacts.contacts.filter((contact) => contact.name.toLowerCase().includes((filter.filter.toLowerCase())))
  : contacts.contacts;
  
  return(<><form action="" onSubmit={handleSubmit}>
  <div className={css.formInp}>       
  <label className={css.label}>Name</label>
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleChange}
  value={name}
/>

<label className={css.label}>Number</label>
<input type="tel"
name="number"

pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
onChange={handleChangeNumber}
value={number}>
</input>
<button className={css.btn}> Add contact</button>
</div>

</form>
{ filter && newFilteredContacts.length > 0 && <ul>
    {newFilteredContacts.map(({name,id, number}) => (
      <li key={id} className={css.itemList}>
        {name}: {number}
        <button onClick={()=> deleteContact(id)} className={css.btn}>Delete</button>
      </li>
    ))}
  </ul>}
  <div className={css.input}>
  <label>Find contacts by name </label>
<input 
type="text" 
name="filter"
onChange={handleChangeFilter}
value={filter.filter || '' }

/>

</div>
  </>
    
  )
}

export default ContactForm;