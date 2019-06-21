import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import NewModel from "./components/NewModel";
// import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

class App extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {

  }
  render() {
    return (
      <div>
      {/* <BrowserRouter> */}
        Client
        <ListOfUsers />
        <NewModel />
      {/* </BrowserRouter> */}
      </div>
    );
  }
}
export default (App);


