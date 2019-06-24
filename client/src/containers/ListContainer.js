import ListOfUsers from "../components/ListOfUsers";
import { connect } from "react-redux";
// import { listUsers, deleteUser } from '../actions'


function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       deleteUser: () => dispatch(deleteUser())
//     }
//   }


export default connect(mapStateToProps,null)(ListOfUsers);