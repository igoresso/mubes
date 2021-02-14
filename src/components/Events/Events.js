import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Container as = "section">
      <h1 className="page-title mb-5 pt-2 text-center">Events</h1>

      <Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Peer Mentoring</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Trivia Night</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Makerthon</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Networking Night</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Discord Game Night</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  <Col md={4} className="p-5 p-md-3 text-center">
                    <img src="img/mentor.svg" alt="Rocket" className = "pl-4 h-100 w-100"/>
                  </Col>
                  <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                    <h5 className = "text-center">
                      This year long program gives you the opportunity to connect with industry mentors
                      and mentor undergraduate students interested in biomedical engineering!
                      <br></br><br></br>
                      More coming soon!
                    </h5>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Col md={4} className="p-5 p-md-3 text-center">
                    <img src="img/quiz.png" alt="Rocket" className = "pl-4 h-100 w-100"/>
                  </Col>
                  <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                    <h5 className = "text-center">
                      "Who is the first president of our society?"
                      <br></br>
                      is one of the many questions you'll need to know the answer to for our annual trivia night 
                      where you can form teams with your friends (or make new ones!) and compete for some fun prizes.<br></br>
                      <br></br>
                      Stay tuned for event dates!
                    </h5>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  <Col md={4} className="p-5 p-md-3 text-center">
                    <img src="img/tools.svg" alt="Rocket" className = "pl-4 h-100 w-100"/>
                  </Col>
                  <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                    <h5 className = "text-center">
                      Always wanted to participate in a hackathon but don't know how to code?
                      Always wanted to get involved in a case competition specifically for biomedical technologies?
                      The MUBES Makerthon is for you!<br></br>
                      <br></br>
                      Stay tuned for more details!
                    </h5>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Row>
                  <Col md={4} className="p-5 p-md-3 text-center">
                    <img src="img/network.png" alt="Rocket" className = "pl-4 h-100 w-100"/>
                  </Col>
                  <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                    <h5 className = "text-center">
                      Our annual networking night!<br></br>
                      Join this to connect with industry within the biomedical engineering sphere
                      and practise your networking skills!
                      <br></br><br></br>
                      Coming soon!
                    </h5>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Row>
                  <Col md={4} className="p-5 p-md-3 text-center">
                    <img src="img/games.svg" alt="Rocket" className = "pl-4 h-100 w-100"/>
                  </Col>
                  <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                    <h5 className = "text-center">
                      Alright, not all of us are in Melbourne and we have indoor maximum capacities.
                      So what  better way to make friends than to have fun game nights?
                      <br></br><br></br>
                      More to come!
                    </h5>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row> 
      </Tab.Container>
    </Container>
  )
}
