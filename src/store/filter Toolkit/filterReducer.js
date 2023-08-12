import { createFilter } from "./actions";
import { initialState } from "./initialState";

export const filterReducer = createReducer(initialState,{
[createFilter]:(state,{payload})=>({
  ...state,
  filter:payload
})
})