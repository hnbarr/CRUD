import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { listUsers } from './actions'

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     listUsers: (users) => dispatch(listUsers(users))
//   };
// }

export default connect(mapStateToProps)(App);
