import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import NewModel from "./components/NewModel";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        Client
        <ListOfUsers />
        <NewModel />
      </div>
    );
  }
}
export default (App);


