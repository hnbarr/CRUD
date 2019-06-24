import React, { Component } from 'react'
import './components.css'
import ListOfUsers from './ListOfUsers';
import NewUser from './NewUser';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NewUser />
                <ListOfUsers />
            </div>
        )
    }
}

