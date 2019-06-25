import ListOfUsers from "../components/ListOfUsers";
import { connect } from "react-redux";
// import { listUsers, deleteUser } from '../actions'


function mapStateToProps(props) {
    return {
    users: props.users
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteUser: () => dispatch(deleteUser())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);