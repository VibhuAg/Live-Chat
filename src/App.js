import logo from "./logo.svg";
import "./App.css";
import CreateRoom from "./Pages/CreateRoom";
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ChatApp</NavbarBrand>
          </div>
        </Navbar>
        <CreateRoom/>
      </div>
    );
  }
}
export default App;
