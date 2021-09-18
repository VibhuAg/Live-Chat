
import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Pages/CreateRoom/Main'
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      
       <div className="App">
       <Main />
     </div>
      
     
    );
  }
}
export default App;
