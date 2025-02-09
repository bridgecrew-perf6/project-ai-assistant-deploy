import React from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import './About.scss'

export default class About extends React.Component {
   state = {
      firstRender: true, alanBtnHidden: true, alanBtnInstance: null
   }
   componentDidMount() {
      this.alanBtnInstance = alanBtn({
         key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: (commandData) => {
            if (commandData.command === 'go:home') {
               alanBtn().deactivate();
               alanBtn().remove();
               this.props.history.push("/")
            } else if (commandData.command === 'go:conversation') {
               alanBtn().deactivate();
               alanBtn().remove();
               this.props.history.push("/conversationapp")
            } else if (commandData.command === 'go:assistant') {
               alanBtn().deactivate();
               alanBtn().remove();
               this.props.history.push("/proassistant")
            } else if (commandData.command === 'go:newfeatures') {
               alanBtn().deactivate();
               alanBtn().remove();
               this.props.history.push("/newfeatures")
            } else if (commandData.command === 'go:about') {
               alanBtn().deactivate();
               alanBtn().remove();
               this.props.history.push("/about")
            }
         },
      });
   }

   componentWillUnmount() {
      this.alanBtnInstance.deactivate();
      this.alanBtnInstance.remove();
   }
   // componentDidMount(){
   //    this.alanBtnInstance.deactivate();
   // }

   render() {
         return (
            <div className="about">
               <Container fluid="true" >
                  <Header />
               </Container>
               <Container >
                  <Row md={1} lg={1} style={{ height: '1rem' }} >
                  </Row>

                <Card className="about__card-aboutme" bg="light" >
                  <Row md={2} lg={2}>
                     <Col xs={2} md={2}>
                        <Card bg={'dark'} text={'white'} 
                              style={{ width: '25rem', marginLeft: "1.5rem", 
                                       marginTop:"1.5rem", marginBottom:"1.5rem",
                                       borderRadius:"8px"
                                    }}>
                           <Card.Body>
                              <Card.Title>About Me</Card.Title>
                              <Card.Text>
                                 Web developer passionate about technology and driven by a desire to increase 
                                 presence of large corporations, startups and people with a small corner of 
                                 the Internet.
                              </Card.Text>
                              <Link className="about__linkedin-link" style={{ marginLeft:"1.8rem", marginRight: '1.8rem' }} 
                                    to="/linkedin">
                                 <Button variant="outline-light">LinkedIn</Button>
                               </Link> 
                              <Link className="about__linkedin-link" style={{ marginRight: '1.8rem' }} 
                                 to="/github">
                                 <Button variant="outline-light">GitHub</Button>
                              </Link>
                              <Link className="about__linkedin-link" 
                                 to="/mail">
                                 <Button variant="outline-light">Email</Button>
                              </Link>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col xs={2} md={2}>
                        <Card className="about__card-aboutme-image">
                           <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/hectorpalacios.jpg'} />
                        </Card>
                     </Col>
                  </Row>
                </Card>

                <Row md={1} lg={1} style={{ height: '3rem' }}>
                </Row>
               </Container>

               <Container fluid="true">
                  <Row md={2} lg={4}>
                    
                     <Col xs={2} md={4}> 
                        <Card bg={'light'} text={'primary'} style={{ width: '18rem', borderRadius: "8px"  }}>
                            <Card.Body>  
                              <Card.Img variant="top" 
                                        style={{ marginBottom: '1rem' }}
                                        src={process.env.PUBLIC_URL + '/assets/images/assistant.jpg'} />
                              <Link className="home__proassistant-link"
                                 to="/github/proassistant">
                                 <Button variant="primary">Go to Ai Assistant Code</Button>
                              </Link>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col xs={2} md={2}>
                        <Card bg={'light'} text={'dark'} style={{ width: '18rem', borderRadius:"8px" }}>
                           <Card.Body>
                              <Card.Title>Alan AI Professional Assistant</Card.Title>
                              <Card.Text>
                                 Personal AI-Assistant to help track daily activities, tasks, news, 
                                 weather, and write text using your voice. Also there is a demo with
                                 chatbot with chating and speaking capabilities. Sprint 1 Ver. 
                                 Tools: React, Javascript, Alan Studio API, Adobe Photoshop,
                                 CSS and SASS.
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>

                     <Col xs={2} md={4}>
                        <Card bg={'light'} text={'primary'} style={{ width: '18rem', borderRadius: "8px"  }}>
                           <Card.Body>
                              <Card.Img variant="top"
                                 style={{ marginBottom: '1rem' }}
                                 src={process.env.PUBLIC_URL + '/assets/images/webdemo1.png'} />
                              <Link className="home__adidasproject-link" style={{ alignContent: 'center', left: '1rem' }}
                                 to="/github/adidashackaton4d">
                                 <Button variant="primary" style={{ left: '2rem' }}>Go to Landing Page Code</Button>
                              </Link>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col xs={2} md={2}>
                        <Card bg={'light'} text={'dark'} style={{ width: '18rem', borderRadius: "8px"  }}>
                           <Card.Body>
                              <Card.Title>Adidas Hackanton 4D</Card.Title>
                              <Card.Text>
                                 Our team provided in less than 24 hrs a campaign and a
                                 mobile responsive landing page to help users to buy
                                 products made from recycled plastic bottles from the
                                 ocean. The landing web page is a prototype.
                                 Tools: Figma, React, Javascript, CSS and SASS.
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>


                  </Row>
               </Container>
            </div>
         )
   }
}