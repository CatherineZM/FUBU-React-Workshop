import React from 'react';
import { Container, Card} from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './HomePage.css';

class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      isFlipped: false,
    };
  }

  // {/*function for react in class can also be added here */}
  
  render() {
    return (
      <div>
        {/* Complete your workshop in here*/}
        <Container className="workshopContent"> 
          <h1 className="Title">Welcome to FUBU React Workshop!</h1>
          {/* Add your card in here*/}
          <Card className="flipCard">
            <Card.Body className="flipCardFront">
              <Card.Title>Catherine Zhou</Card.Title>
              <Card.Text>I'm a software developer in IBM.</Card.Text>
            </Card.Body>_
            <Card.Body className="flipCardBack">
              <Card.Title>My hobby</Card.Title>
              <Card.Text>I have two cats</Card.Text>
            </Card.Body>
          </Card>
          {/* Add your Flippy in here*/}
          <Flippy 
            flipOnHover={true} 
            flipOnClick={false} 
            ref={(r) => this.isFlipped = r}>
            <FrontSide>
              <div>
                <h1>Catherine Zhou</h1>
                <p>I'm a software developer in IBM</p>
              </div>
            </FrontSide>
            <BackSide>
              <div>
                <h1>My hobby</h1>
                <p>I have 2 cats</p>
              </div>
            </BackSide>
          </Flippy>
        </Container>
      </div>
    )
  }
}

export default HomePage;