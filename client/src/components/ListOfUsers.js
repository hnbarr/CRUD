import React from 'react'
import './components.css'
// import PropTypes from 'prop-types';
// import Link from 'react-router-dom'
// import deleteUser from '../actions/index'


const ListOfUsers = (props) => {
    // this.props.listUsers()
    console.log(props) //returning an object
    return (
        <div className='card'>                
        <h4>Current Users:</h4>
            <ul>
                {/* broke here! */}
                {/* commented code goes here */}
            </ul>
        </div>
    )
}

// ListOfUsers.propTypes = {
//     users: PropTypes.array
//   };

export default ListOfUsers;


/* {props.users.map((user)=> {
<div id='user.firstName'>
{user.firstname}
<Link to='/detail'> details </Link>
<button onClick={deleteUser} type='submit'> delete </button>
</div>
})} */


