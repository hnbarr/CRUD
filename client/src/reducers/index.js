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