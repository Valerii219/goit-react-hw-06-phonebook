import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

import { createContacts, deleteContacts } from "./actions";

export const contactsReducer = createReducer(initialState, {
  [createContacts]:(state, {payload})=>({
    ...state,
    contacts: [...state.contacts, payload],
  }),
  [deleteContacts]:(state, {payload})=>({
    ...state,
    contacts: payload,
  })

})