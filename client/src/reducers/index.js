import {combineReducers} from "redux";

const users = (state = [], action) => {
  switch (action.type) {
    case 'LIST_USERS':
      return action.value
    case 'CREATE_USER':
      return [...state, action.value]
    case 'DELETE_USER':
      state.slice(1);
    break;
    default:
      return state
  }
}

const currentUser = (state = {}, action) => {
  switch(action.type){
    case "SHOW_USER":
      return action.value;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users,
  currentUser
});
export default rootReducer;