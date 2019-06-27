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
                <p>show user details here. Solo Dolo User</p>
            </div>
        )
    }
}