import logo from "./logo.svg";
import "./App.css";
import CreateRoom from "./Pages/CreateRoom";
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import { DISHES } from './Pages/CreateRoom/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ChatApp</NavbarBrand>
          </div>
        </Navbar>
        <CreateRoom dishes={this.state.dishes}/>
      </div>
    );
  }
}
export default App;
