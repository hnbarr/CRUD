import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOfUsers from './components/ListOfUsers'
import NewModel from './components/NewModel'
import UserDetail from './components/UserDetail'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'></Route>
            <Route path='/list' component={ListOfUsers}></Route>
            <Route path='/new' component={NewModel}></Route>
            <Route path='/detail' component={UserDetail}></Route>
        </Switch>
    );
}

export default Router