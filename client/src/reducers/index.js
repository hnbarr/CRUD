import {combineReducers} from "redux";
import state from '../state'

const users = (state = [], action) => {
  if(action.type === "LIST_USERS"){
    return action.value
  } 
  return state;
}

const rootReducer = combineReducers({
  users
});
export default rootReducer;





// const newState = [...state];
// switch (action.type) {
//   case "LIST_USERS":
//     return action.value;
//   case "CREATE_USERS":
//     newState.push(action.value);
//     return newState;
//   case "DELETE_USERS":
//     const index = newState.findIndex(u => u._id === action.value);
//     newState.splice(index, 1);
//     return newState;
//   default:
//     return state;