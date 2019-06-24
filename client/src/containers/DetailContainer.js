import UserDetail from "../components/UserDetail";
import { connect } from "react-redux";


function mapStateToProps(store) {
  return {
    users: store.users
  };
}


export default connect(
  mapStateToProps,
  null
)(UserDetail);