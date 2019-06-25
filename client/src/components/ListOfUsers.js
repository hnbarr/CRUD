import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
// import deleteUser from '../actions/index'


const ListOfUsers = (props) => {
    console.log('ListOfUsers.js: props =', props)
    return (
        <div className='card'>                
        <h4>Current Users:</h4>
            <ul>
                {props.users.map((user)=> {
                  return (
                    <li key={user.id}>{user.firstName} <Link to='/:id'> details </Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListOfUsers;





