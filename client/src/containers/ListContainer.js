import ListOfUsers from "../components/ListOfUsers";
import { connect } from "react-redux";
import { listUsers } from '../actions'


function mapStateToProps(state) {
    return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      listUsers: () => dispatch(listUsers())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);