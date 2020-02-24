import React from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () =>
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
            <p className="lead text-center text-md-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam hic doloremque voluptatem nobis molestiae, nam ipsum cum nulla aliquam, perspiciatis non culpa cupiditate quasi quo, tempore et rerum. Tempore, ducimus.</p>
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
              <p className="lead text-center text-md-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic labore maiores nesciunt ipsam veritatis quos. Eius vitae voluptate repellendus doloremque non, rerum maiores minus beatae ipsa necessitatibus sint alias.</p>
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
            <p className="lead text-center text-md-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quasi maxime harum provident accusantium voluptatum repudiandae labore libero, facere quae aliquam eum neque nam modi aliquid deleniti magnam rem unde?</p>
          </Col>
        </Row>
      </Container>
    </section>
  </React.Fragment>
