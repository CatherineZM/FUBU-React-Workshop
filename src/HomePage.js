import React from 'react';
import { Container, Alert, Card, Row, Col, Accordion, Image, ListGroup } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import Card1 from './examples/card1.png';
import Card2 from './examples/card2.png';
import Card3 from './examples/card3.png';
import CSS1 from './examples/css1.png';
import FUBU from './examples/FUBU.png';

import './HomePage.css';

class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      isFlipped: false,
    };
  }

  render() {
    return (
      <div>
        <Container className="workshopContent">
          <Row>
            <Col xs={3} sm={3} className="banner">
              <Image src={FUBU} />
            </Col>
            <Col xs={9} sm={9} className="banner">
              <h1>Welcome to FUBU React Workshop</h1>
            </Col>
          </Row>
          <div>
            <Alert variant="info">
              <Alert.Heading>Hey, nice to see you!</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. Welcome to FUBU React Workshop!
              </p>
              <hr />
              <p className="mb-0">
                Now let's learn to write something by yourself!
              </p>
            </Alert>
          </div>
          <div>
            <h3>Concepts</h3>
            <p>First we will be talking about some concepts to help you understand the ReactJS codes.</p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">HTML Element Structure</div>
                  ReactJS and HTML share similar syntax for elements. All the elements are showed in <code>{'<elementName> </elementName>'}</code>  format.
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">CSS Basic Syntax: Selector </div>
                  CSS selectors are used to "find" (or select) the elements you want to style. There are 3 mainly used selector: element, id and class.
                  <br/> Element Selector selects element based on the elements' name. In CSS: <br />
                  <code>{'h1{'} <br/> {'text-align:center;'} <br/> {'}'}</code>
                  <br/> ID Selector (<code> id="IDName"</code>) uses the id attribute of an element to select a specific element. 
                  Note that the id of an element is unique within a page. So it can only be used on one element only. In CSS: <br />
                  <code>{'#firstTitle{'} <br/> {'text-align:center;'} <br/> {'}'}</code>
                  <br/> Class Selector (<code> class="className"</code> or <code> className="className"</code>) selects elements with a specific class attribute. 
                  This can be used to classify a set of elements in a page. In CSS: <br />
                  <code>{'.title{'} <br/> {'text-align:center;'} <br/> {'}'}</code>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">ReactJS libraries</div>
                  There are various ReactJS libraries you can use to accomplish all kinds of functionalities you want. <br/>
                  Some of popular UI libraries includes react-bootstrap, material-ui and Semantic UI. <br/>
                  For this workshop, we will be using react-bootstrap and we have added all the libraries you need. 
                  Simply type <code>{'npm install'}</code> in your terminal under the directory <code>/FUBU-react-Workshop</code> to install them.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <br/>
          <h3>Practice</h3>
          To practice using ReactJS, we will start with a simple but common element: Card
          <Card className="FlipCardExample">
            <Card.Header>Let's create a card that can flip</Card.Header>
            <Card.Body>
              <Card.Title>Create a card</Card.Title>
              <Card.Text>
                Card is a simple element that has various usage and can be applied to most websites.
                It's one of the most commonly used component in React. First we will be talking about 
                how to implement a card and later on we will talk about how to add more twist to it.
              </Card.Text>
              <Card.Title>Instruction</Card.Title>
              <Card.Text>
                More details can be found on <code>react-bootstrap.github.io/components/cards/</code> <br />
                <ol type="1">
                  <li>Create a <code>Card</code> in your <code>Container</code></li>
                  <li>Inside <code>Card</code>, add a body (<code>Card.Body</code>), a title within the body (<code>Card.Title</code>) 
                  and a text for the body (<code>Card.Text</code>)</li>
                  <li>In each one of the component you just created, fill in some information about yourself in there.</li>
                </ol>
              </Card.Text>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Code for Card</Accordion.Header>
                  <Accordion.Body>
                    <Image src={Card1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
          <Card border="info" className="FlipCardExample">
            <Card.Body>
              <Card.Title>Add Flipping</Card.Title>
              <Card.Text>
                There are three ways to flip cards: <br />
                CSS native way: Easy to implement but can only be used on limited animations. <br />
                React library way: Easy to implement and there are various of things you can use. <br />
                React states control: More complicated to implement but it can be applied for more complex functionalities. <br />
                In this section, we will be talking about the first two ways for animation.  
              </Card.Text>
            </Card.Body>
          </Card>
          <Row className="FlipCardExample">
            <Col>
            <div className="flip-card">
              <Card className="flip-card-inner">
                <Card.Body className="flip-card-front">
                  <Card.Title>CSS Native Way</Card.Title>
                  <Card.Text >
                  This card's animation is achieved by using the CSS Native Way.
                  You can find a lot of examples code online. Here we will use <code>transform</code>, <code>transition</code>, 
                  and <code>hidden</code> to achieve the flipping.
                  <hr/>
                  The CSS Native Way is more commonly used when you are programming an HTML webpage.
                  Since for ReactJS, there are multiple existing libraries and usage of states to replace this way.
                  However, CSS is a powerful tool when it comes to layouts, color changes, and other non-animation related 
                  decoration.
                  </Card.Text>
                </Card.Body>
                <Card.Body className="flip-card-back">
                  <Card.Title>Wow I'm flipped</Card.Title>
                  <Card.Text>
                    I should put something here but I can't think of what to put here.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>
            <Col>
              <Flippy
                  flipOnHover={true} 
                  flipOnClick={false} 
                  flipDirection="horizontal" 
                  ref={(r) => this.isFlipped = r} 
                  className="flip-card">
                <FrontSide className="flipCardLib">
                  <h5>The React Library Way</h5>
                  <p>
                    This card is made by using a react library called Flippy. 
                  </p>
                  <hr/>
                  As I mentioned before, there are a lot of different libraries to achieve all kinds of functionalities in React. 
                  So the next time you think of something you want to do with React, make sure you search for a library first to 
                  simplify the programming process.
                </FrontSide>
                <BackSide className="flipCardLib">
                  <h5>Wow I'm flipped.</h5>
                  <p>I should put something here but I can't think of what to put here.</p>
                </BackSide>
              </Flippy>
            </Col>
          </Row>
          <Row className="FlipCardExample">
            <Col>
              <h4>Instruction for the CSS Native Way</h4>
              <ol type="1">
                <li>Create a back side of your card, by coping and pasting another <code>Card.Body</code></li>
                <li>Change the contents in <code>Card.Body</code> (Maybe you can add your hobbies there?)</li>
                {/* If you are making multiple cards to flip, use the class selector. If you are making a single card, you can use the ID selector.
                  However, I recommend using class selector when programming a website since you never know if you will add more element later or not.
                  <br /> */}
                <li>
                  Add 3 different class selectors to the card, the card's front body and the card's back body by adding <code>className="aNameHere"</code> in side of your element.
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Code for Card with Class Selector</Accordion.Header>
                      <Accordion.Body>
                        <Image src={Card2} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li>Under <code>/src</code>, go to <code>HomePage.css</code></li>
                <li>In <code>HomePage.css</code>, <br/> add <code>transition: transform 0.8s;</code> to your card class, <br/>
                add <code>transform: rotateY(180deg);</code> to your card on hover (<code>.flip-card-inner:hover</code>) and card body's back<br/>
                and <code>-webkit-backface-visibility: hidden;</code> (for Safari) or <code>backface-visibility: hidden;</code>
                to both your card's body front and back.
                </li>
                <li>Now your card will be able to flip, however, the layout is messed up. In order to solve the layout problem, 
                  We will need to add more things in there which we will not dive into today:
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Code for Card with Class Selector</Accordion.Header>
                      <Accordion.Body>
                        <Image src={CSS1} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
              </ol>
            </Col>
            <Col>
              <h4>Instruction for the React Library Way</h4>
              <p>Most React libraries have their unique components for usage. 
                So in order to use React libraries, we will need to code a new component.
                More information about Flippy can be found 
                on their official GitHub repository: https://github.com/sbayd/react-flippy 
              </p>
              <ol type="1">
                <li>Create a component called Flippy <code>{'<Flippy></Flippy>'}</code></li>
                <li>Inside <code>Flippy</code> create a front side component <code>{'<FrontSide></FrontSide>'}</code> and a back side component. <code>{'<BackSide></BackSide>'}</code></li>
                <li>In your front and back side components, add some content in there by using some HTML components <code>{'<div></div>'}</code> for a section or <code>{'<p></p>'}</code> for a paragraph</li>
                <li>As the requirement for <code>Flippy</code> the following conditions need to be added inside Flippy <code>{'flipOnHover={true} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.isFlipped = r} '}</code></li>
                <li>Now we will be adding states, states are a board topic to discuss. You can think of states as some kind of parameters. In this case, as you can see we have <code>isFlipped</code> so we will add this parameter in the state.
                  <br />Define this parameter under <code>this.state</code>: <code>{'isFlipped: false,'}</code>
                </li>
                <li>Now your card can be flipped as you want.
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Code for Card with Class Selector</Accordion.Header>
                      <Accordion.Body>
                        <Image src={Card3} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
              </ol>
            </Col>
          </Row>
          <div>
            <Alert variant="success">
              <Alert.Heading>Congratulation!</Alert.Heading>
              <p>
                You have finished the React Workshop! Enjoy making websites! 
              </p>
            </Alert>
          </div>
        </Container>
      </div>
    )
  }
}

export default HomePage;