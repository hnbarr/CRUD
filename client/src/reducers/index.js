import {combineReducers} from "redux";
// import state from '../state'

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