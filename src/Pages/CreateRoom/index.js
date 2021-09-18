import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Navbar,NavbarBrand} from 'reactstrap';
class  CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'ClickMe!!',
                  image: 'images/chat.jpg',
                  
                  description:'This Feature allows you to create a room'                        },
               
               ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
            
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default CreateRoom;