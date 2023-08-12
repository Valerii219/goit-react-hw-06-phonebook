import { initialState } from "./initialState";

export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'filter':
        
        return {
          ...state,
         filter:payload
        };
        case 'filtered':
        return {
          ...state,
         filter:payload
        };

  
      default:
        return state;
    }
  };