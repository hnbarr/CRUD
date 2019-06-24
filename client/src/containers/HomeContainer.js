import { connect } from "react-redux";
// import { listUsers } from '../actions'

function mapStateToProps(state) {
    return {
      users: state.users
    };
  }

  export default connect(mapStateToProps)(ListOfUsers);


//   not sure if this is right at all...