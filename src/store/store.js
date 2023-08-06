import { createStore } from "redux";

const reducer =(state, action ) => {
    switch (action.type) {
        case 'increment':
        return { 
            ...state,
            total: action.payload,
        }
        
        case 'decrement':
        return { 
            ...state,
            total: action.payload,
        }
    
        default:
            return state
    }
   
}

export const store = createStore(reducer,  {
    contacts: [],
    filter: ""
  })

console.log('store :>> ', store);
store.dispatch({type: "newContact", payload: {}})
console.log('store.getState() :>> ', store.getState());