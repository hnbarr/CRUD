import {combineReducers} from "redux";

const users = (state = [], action) => {
  if(action.type === "LIST_USERS"){
    return action.value //undefined?
  } 
  return state;
}

const rootReducer = combineReducers({
  users
});
export default rootReducer;


// const users = (state = [], action) => {
//   let newState = [ ...state ]
//   switch (action.type) {
//     case "LIST_USERS":
//       return action.value //undefined
//     case "CREATE_USER":
//       const index = newState.findIndex(u => u.id === action.value)
//       newState.push(action.value)
//       return newState
//     case "SHOW_USER":
//       return action.value === index //this is wrong?
//     case "DELETE_USER":
//       index > -1 && newState.splice(index, 1)
//       return newState
//     default:
//       return state
//   }
// }