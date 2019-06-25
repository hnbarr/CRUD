import React from 'react'
import './components.css'
import deleteUser from '../actions/index'

const UserDetail = (props) => {
    return (
        <div className='card'>
            broken so far... :/
            <ul>
                {props.users.map((user)=> {
                // need to be able to select a specific user and return it's value
                  return (<div key={user.id} id='userDetailCard'>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.city}</li>
                    <li>{user.state}</li>
                    <li>{user.email}</li>
                    <button onClick={deleteUser} type='sumbit'>Delete User</button>
                  </div>)
                })}  
            </ul>
        </div>
    )
}

export default UserDetail;


// not working properly.