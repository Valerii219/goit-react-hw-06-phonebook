import { initialState } from "./initialState";


export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'addContact':
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case 'deleteContact':
      return {
        ...state,
        contacts:  [...state.contacts, payload],
      };
    default:
      return state;
  }
};