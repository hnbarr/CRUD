import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { listUsers } from './actions'

class App extends Component {

  componentDidMount() {
    listUsers()
  }
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}
export default (App);
