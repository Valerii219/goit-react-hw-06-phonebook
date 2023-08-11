import { initialState } from "./initialState";

export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'add':
        const newFilter = payload
          ? state.contacts.filter(contact =>
              contact.name.toLowerCase().includes(payload.toLowerCase())
            )
          : state.contacts;
  
        return {
          ...state,
          filter: payload,
          filteredContacts: newFilter,
        };
  
      default:
        return state;
    }
  };