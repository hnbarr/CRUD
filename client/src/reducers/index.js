import {combineReducers} from "redux";

function users (state = [], action) {
  const newState = [...state];
  switch (action.type) {
    case "LIST_USERS":
      return action.value;
    case "CREATE_USERS":
      newState.push(action.value);
      return newState;
    case "DELETE_USERS":
      const index = newState.findIndex(v => v._id === action.value);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users
});
export default rootReducer;
