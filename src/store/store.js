import { createStore } from "redux";
import { reducer } from "./reducer";


// const handleAddContact = (newContact) => {
//     const sameContact = ;

//     if (sameContact) {
//       alert(`${sameContact.name} is already in contacts`);
//       return;
//     }

//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

export const store = createStore(reducer)
// console.log('state :>> ', store.getState());
// store.dispatch({type:"createNew", payload:"bob"});
// store.dispatch({type:"updateAge", payload:40});

// console.log('state :>> ', store.getState());
