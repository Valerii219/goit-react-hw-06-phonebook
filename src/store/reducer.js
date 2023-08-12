import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterReducer';


export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
