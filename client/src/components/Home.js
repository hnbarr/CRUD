import React from 'react'
import './components.css'
import ListOfUsers from './ListOfUsers';
import NewUser from './NewUser';

const Home = () => {
    return (
        <div>
            <NewUser />
            <ListOfUsers />
        </div>
    )
}

export default Home;

