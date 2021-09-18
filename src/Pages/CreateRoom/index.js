import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardImgOverlay,Col} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
     Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label ,Button} from 'reactstrap';

class  CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                selectedDish: null
            
                 
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
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    
                    <CardBody>
                      <CardTitle>Enter your Name!</CardTitle>
                      <CardText>{dish.description}</CardText>
                      <div class = "row">
                      <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Name</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Create Room
                                    </Button>
                                </Col>
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
                <div  className="col-12 col-md-5 m-1">
                <Card key={im.id}
                  onClick={() => this.onDishSelect(im)}>
                  <CardImg width="100%" src={im.image} alt={im.name} />
                  <CardImgOverlay>
                      <CardTitle>{im.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
        </div>
        );
    }
}

export default CreateRoom;