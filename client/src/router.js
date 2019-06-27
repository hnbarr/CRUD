import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListContainer from './containers/ListContainer';
import NewUserContainer from './containers/NewUserContainer';
import DetailContainer from './containers/DetailContainer';
import HomeContainer from './containers/HomeContainer';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeContainer}></Route>
            <Route path='/list' component={ListContainer}></Route>
            <Route path='/new' component={NewUserContainer}></Route>
            <Route path='/users/:id' component={DetailContainer}></Route>
        </Switch>
    );
}

export default Router