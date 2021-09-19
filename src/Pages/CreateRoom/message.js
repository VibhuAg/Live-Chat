import CreateRoom from "./index";
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import {DISHES} from './dishes';
import {Questions} from './questions';
import QA from './QAform';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './footer';
import {Link} from 'react-router-dom'
import { Col, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, ModalHeader, ModalBody,
   Form, FormGroup, Input, Label ,Button} from 'reactstrap';
class SendMessageForm extends React.Component {
    constructor() {
      super()
      this.state = {
        message: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      this.setState({
        message: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.sendMessage(this.state.message)
      this.setState({
        message: ''
      })
    }

    render() {
      return (
        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Message</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 1}}>
                                <Link to="/page2">
                                    <Button type="submit" color="primary">
                                        Submit Message
                                    </Button>
                                    </Link>
                                </Col>
                            </FormGroup>
                            </Form>
      )
    }
  }
  export default SendMessageForm