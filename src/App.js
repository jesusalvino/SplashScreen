import './App.css';
import React from 'react';
import Dynamic from './Dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { base64DynamoLogo, base64DynamoBackground } from './encodedImages';


class App extends React.Component {
  constructor() {
    super();
    this.setBackgroundImage();
    this.state = { welcomeToDynamoTitle: "Welcome to Dynamo!" };

    //This is a reference to the DOM of the project that will be called in Dynamo to set the title of the splash screen (Defined by 'Welcome to Dynamo!' by default)
    window.setWelcomeDynamoTitle = this.setWelcomeDynamoTitle.bind(this);
  }

  setBackgroundImage() {
    const backgroundImage = "#base64BackgroundImage"
    if (!backgroundImage.includes('#'))
      base64DynamoBackground = backgroundImage;
  }

  render() {
    return (
      <Container className='fill' fluid="md">
        <Row>
          <Col className='menuOptions' >
            <Row className='bottomMenu'>
              <Col>
                <Row>
                  <div>
                    <img className='dynamoLogo' src={base64DynamoLogo}></img>
                  </div>
                </Row>
                <Row className='welcomeRow'>
                  <div >
                    {this.state.welcomeToDynamoTitle}
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className='bottomMenu'>
              <Col>
                <Dynamic />
              </Col>
            </Row>
          </Col>
          <Col className='p-0' >
            <img className='screenBackground' src={base64DynamoBackground}></img>
          </Col>
        </Row>
      </Container>
    )
  }

  setWelcomeDynamoTitle(title) {
    this.setState({ welcomeToDynamoTitle: title })
  }
}

export default App;