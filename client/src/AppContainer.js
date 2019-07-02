import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { listUsers } from './actions'

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: () => dispatch(listUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
