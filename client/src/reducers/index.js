import {combineReducers} from "redux";

const users = (state = [], action) => {
  switch (action.type) {
    case 'LIST_USERS':
      return action.value
    case 'CREATE_USER':
      return [...state, action.value]
    case 'DELETE_USER':
      state.slice(1)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users
});
export default rootReducer;