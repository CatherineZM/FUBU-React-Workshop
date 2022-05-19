import React from 'react';
import { Container, Card} from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './HomePage.css';

class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        {/* Complete your workshop in here*/}
        <Container className="workshopContent"> 
          <h1>Welcome to FUBU React Workshop!</h1>
          {/* Add your card in here*/}


          {/* Add your Flippy in here*/}
        </Container>
      </div>
    )
  }
}

export default HomePage;