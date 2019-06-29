import './components.css'
import React, { Component } from 'react'
// import { deleteUser } from '../actions';


export default class UserDetail extends Component {

    componentDidMount(){
        this.props.showUser(this.props.match.params.id)
        console.log('props.user in UserDetail: ', this.props.users[this.props.match.params.id -1])
    }

    render() {
        return (
            <div className='card'>
                <p>solo user card here</p>
            </div>
        )
    }
}

// {this.props.users.filter((user) => {
//     user => user.id === this.props.match.params.id && <li key={user.id}> {user.firstName} </li>
//   })}

// {this.props.users.filter(user => user.id === this.props.match.params.id)
//      return(
//          <div>
//             <li>{user.firstName}</li>
//             <li>{user.lastName}</li>
//             <li>{user.city}</li>
//             <li>{user.state}</li>
//             <li>{user.email}</li>
//             <button type='submit' onClick={deleteUser(user.id)}>Delete</button>
//          </div>
//      )
//   }