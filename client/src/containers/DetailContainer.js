import UserDetail from "../components/UserDetail";
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    users: state.users
  };
}


export default connect(mapStateToProps,null)(UserDetail);