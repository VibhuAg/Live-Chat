import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardImgOverlay,Col} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
     Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label ,Button} from 'reactstrap';
import {DUMMY_DATA} from './DUMMY';
import MessageList from './messagelist';
import SendMessageForm from './message'
class  QA extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
                selectedDish: null,
                name:null,
                messages: DUMMY_DATA
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state.name));
        alert('Current State is: ' + JSON.stringify(this.state.name));
        event.preventDefault();
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    
                    <CardBody>
                      <CardTitle>{dish.id}</CardTitle>
                      <CardText>{dish.text}</CardText>
                      <div class = "row">
                      <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Answers to the question as follows:</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                           
                            </Form>
                      </div>
                     
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dishes.map((im) => {
            return (
                <div className = "row row-content">
                    <div  className="col-6">
                <Card key={im.id} style={{width:"200px", height:"200px"}}
                  onClick={() => this.onDishSelect(im)}>
                  <CardImg width="100%" src={im.image} alt={im.id} />
                  <CardImgOverlay>
                      <CardTitle>{im.id}</CardTitle>
                  </CardImgOverlay>
                </Card>
                
              </div>
               <div className = "col-6">
                   {this.renderDish(this.state.selectedDish)}
              </div>
                </div>
                
              
            );
        });

        return (
            <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className = "row">
            <SendMessageForm/>
            </div>
            </div>
       
        );
    }
}

export default QA;