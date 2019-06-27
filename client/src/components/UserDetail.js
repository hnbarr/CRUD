// import React from 'react'
import './components.css'
// import deleteUser from '../actions'
// import showUser from '../actions'

import React, { Component } from 'react'
import { userInfo } from 'os';

export default class UserDetail extends Component {

    componentDidMount(){
        this.props.showUser(this.props.match.params.id)
        // console.log('props.users in UserDetail: ', props)
    }

    render() {
        return (
            <div className='card'>
                <p>show user details here. Solo Dolo User</p>
                {this.props.user}
                {/* not working.. need to be able to get data from api pull here. */}
            </div>
        )
    }
}