import {combineReducers} from "redux";

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




// const users = (state = [], action) => {
//   state = users
//   let newState = [ ...state ]
//   switch (action.type) {
//     case 'LIST_USERS':
//       return action.value
//     case 'CREATE_USER':
//       newState.push(action.value)
//       return newState
//     case 'DELETE_USER':
//       const index = newState.findIndex(u => u.id === action.value)
//       index > -1 && newState.splice(index, 1)
//       return newState
//     default:
//       return state
//   }
// }