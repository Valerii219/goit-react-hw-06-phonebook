import { initialState } from "./initialState";
import {  ADD_CONTACT,  DELETE_CONTACT } from "./types";


export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: payload,
      };
    default:
      return state;
  }
};