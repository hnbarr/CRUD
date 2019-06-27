import ListOfUsers from "../components/ListOfUsers";
import { connect } from "react-redux";
import { listUsers, createUser, deleteUser, showUser } from '../actions'


function mapStateToProps(state) {
    return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      showUser: () => dispatch(showUser()),
      listUsers: () => dispatch(listUsers()),
      createUser: () => dispatch(createUser()),
      deleteUser: () => dispatch(deleteUser())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);