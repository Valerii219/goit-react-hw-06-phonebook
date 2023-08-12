import { createAction } from "@reduxjs/toolkit";
// export const createContacts = (value)=>({type:ADD_CONTACT, payload:value});
// export const deleteContacts = (value)=>({type:DELETE_CONTACT, payload:value})
export const createContacts = createAction('ADD_CONTACT')
export const deleteContacts = createAction('DELETE_CONTACT')


