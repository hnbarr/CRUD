import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOfUsers from './components/ListOfUsers'
import NewUser from './components/NewUser'
import UserDetail from './components/UserDetail'
import Home from './components/Home'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/list' component={ListOfUsers}></Route>
            <Route path='/new' component={NewUser}></Route>
            <Route path='/:id' component={UserDetail}></Route>
        </Switch>
    );
}

export default Router