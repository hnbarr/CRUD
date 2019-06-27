// import React from 'react'
import './components.css'
// import deleteUser from '../actions'
// import showUser from '../actions'

import React, { Component } from 'react'

export default class UserDetail extends Component {

    componentDidMount(){
        this.props.showUser(this.props.match.params.id)
        // console.log('props.users in UserDetail: ', props)
    }

    render() {
        return (
            <div>
                <p>one user here!</p>
            </div>
        )
    }
}


// const UserDetail = (props) => {
//     return (
//         <div className='card'>
//             <ul>
//                 {props.users.map((user)=> {
//                 // need to be able to select a specific user and return it's value
//                   return (<div key={user.id} className='userDetailCard'>
//                      <li>{user.firstName} {user.lastName}</li> 
//                     <li>{user.city}, {user.state}</li>
//                     <li>{user.email}</li>
//                     <button onClick={deleteUser} type='sumbit'>Delete User</button>
//                   </div>)
//                 })}  
//             </ul>
//         </div>
//     )
// }

// export default UserDetail;