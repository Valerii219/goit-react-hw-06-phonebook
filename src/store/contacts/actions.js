import { ADD_CONTACT, DELETE_CONTACT } from "./types";

export const createContacts = (value)=>({type:ADD_CONTACT, payload:value});
export const deleteContacts = (value)=>({type:DELETE_CONTACT, payload:value})

// e.currentTarget.value