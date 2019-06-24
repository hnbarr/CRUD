import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

class App extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    // loadThings()
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
