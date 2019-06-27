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
                <p>show user details here. Solo Dolo User</p>
                <p>{this.props.currentUser.firstName}</p>
                {/* not working.. need to be able to get data from api pull here. */}
            </div>
        )
    }
}