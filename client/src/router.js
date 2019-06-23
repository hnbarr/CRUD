import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOfUsers from './components/ListOfUsers'
import SignUp from './components/SignUp'
import UserDetail from './components/UserDetail'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'></Route>
            <Route path='/list' component={ListOfUsers}></Route>
            <Route path='/register' component={SignUp}></Route>
            <Route path='/:id' component={UserDetail}></Route>
        </Switch>
    );
}

export default Router