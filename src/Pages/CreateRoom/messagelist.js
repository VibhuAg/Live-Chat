import CreateRoom from "./index";
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import {DISHES} from './dishes';
import {Questions} from './questions';
import QA from './QAform';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './footer';
class MessageList extends React.Component {
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
               <div>
                   <h6>
                   {message.senderId}
                   </h6>
                 
               </div>
               <div>
                 {message.text}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }
  
export default MessageList;