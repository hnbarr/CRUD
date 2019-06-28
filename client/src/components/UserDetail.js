import './components.css'
import React, { Component } from 'react'

export default class UserDetail extends Component {

    componentDidMount(){
        this.props.showUser(this.props.match.params.id)
        console.log('props.users in UserDetail: ', this.props)
    }

    render() {
        return (
            <div className='card'>
                <ul>
                  {this.props.match.isExact && <li>{this.props.showUser.firstName}</li>}
                </ul>
            </div>
        )
    }
}

// {this.props.users.map((user) => {
//     user => user.id === this.props.match.params.id && <li key={user.id}> {user.firstName} </li>
//   })}