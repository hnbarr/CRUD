import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { listUsers } from './actions'

class App extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    this.props.listUsers()
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
