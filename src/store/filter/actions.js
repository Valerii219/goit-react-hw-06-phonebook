export const createFilter = (value)=>({type:'filter', payload:value});
export const createFilteredContacts = (value)=>({type:'filtered', payload:value})