import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";

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
      </div>
    );
  }
}
export default (App);


