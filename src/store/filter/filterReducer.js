import { initialState } from "./initialState";
import { FILTER } from "./types";

export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case FILTER:
        
        return {
          ...state,
        filter:payload
        };

  
      default:
        return state;
    }
  };