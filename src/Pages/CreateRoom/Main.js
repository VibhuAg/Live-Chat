
import CreateRoom from "./index";
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import {DISHES} from './dishes';
import {Questions} from './questions';
import QA from './QAform';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './footer';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      dishes1:Questions,
      selectedDish: null,
      selectedQA:null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  onQASelect(dishId)
  {
    this.setState({ selectedQA: dishId});
  }

  render() {
    
    return (
      
       <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ChatApp</NavbarBrand>
          </div>
        </Navbar>
        <Switch>
        <Route exact path='/' component={() => <CreateRoom dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
        <Route path="/page2" component={() => <QA dishes = {this.state.dishes1}  onClick={(dishId) => this.onQASelect(dishId)}/>} />
        <Redirect to="/" />
        </Switch>
        <Footer/>
        

      </div>
      
     
    );
  }
}
export default Main;
