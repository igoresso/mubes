import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () => {
  useEffect(() => {
    document.title = "MUBES";
  })

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-4">Welcome to the Melbourne University Biomedical Engineering Society!</h1>
          <p className="lead">We encourage and support Biomedical Engineering students and those interested in the field</p>
          <Link to="/membership" className="btn btn-primary btn-lg" role="button">Join now</Link>
        </Container>
      </Jumbotron>
      <section>
        <h2 className="page-title text-center p-2">What can I do after finishing Biomedical Engineering major?</h2>
        <Container>
          <Row className="py-4">
            <Col md={4} className="p-5 p-md-3 text-center">
              <img src="img/rocket.svg" alt="Rocket" />
            </Col>
            <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
            <h3 className="h3 text-center text-md-left">Launch your own biomedical startup</h3>
              <p className="lead text-center text-md-left"> Masters of Biomedical Engineering has more subjects where you are given a chance to build your own devices. Check out <a rel="noopener noreferrer" href="https://endeavour.unimelb.edu.au/success-stories/navi-technologies" target="_blank">Navi Technologies</a> and <a rel="noopener noreferrer" href="https://endeavour.unimelb.edu.au/success-stories/navi-technologiehttps://eng.unimelb.edu.au/ingenium/graduate-success-stories/biomedical-engineering-startup-stelect-wins-medtechs-got-talent" target="_blank">Stelect</a> startups co-founded by our alumni!</p>
            </Col>
          </Row>
        </Container>
        <div className="bg-light">
          <Container>
            <Row className="py-4 flex-md-row-reverse">
              <Col md={4} className="p-5 p-md-3 text-center">
                <img src="img/blood.svg" alt="Blood cells" />
              </Col>
              <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
                <h3 className="text-center text-md-left">Deep dive into research</h3>
                <p className="lead text-center text-md-left">Start with an honours year in a lab of your choice - both academic and research institutes. Get involved in research internships.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="py-4">
            <Col md={4} className="p-5 p-md-3 text-center">
              <img src="img/team.svg" alt="Team" />
            </Col>
            <Col md={8} className="pl-md-5 d-md-flex flex-column justify-content-center">
            <h3 className="h3 text-center text-md-left">Join industry as an engineer</h3>
              <p className="lead text-center text-md-left">You are doing an engineering degree accredited by the Engineers Australia. The program gives you problem solving and interpersonal skills which are in high demand and can be used in any engineering field.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
