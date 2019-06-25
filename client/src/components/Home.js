import React from 'react'
import './components.css'
import ListContainer from '../containers/ListContainer';
import NewUserContainer from '../containers/NewUserContainer';

const Home = () => {
    return (
        <div id='homeLayout'>
            <NewUserContainer />
            <ListContainer />
        </div>
    )
}

export default Home;

