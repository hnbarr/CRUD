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
                    <div className='userDetailCard' key={user.lastName}>
                      <li>{user.firstName} {user.lastName} from {user.city} </li> 
                      <Link id='detailLink' to={`/${user.id}`}> details </Link>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListOfUsers;





