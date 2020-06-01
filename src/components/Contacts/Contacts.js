import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default () => {
  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Contacts</title>
        <meta name="description" content="Do you have any questions? Find the answers you're looking for." />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Contacts</h1>
      <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly or fill in the form below. Email:&#160;<a href="mailto:info@mubes.club">mubes.unimelb@gmail.com</a></p>
      <Row className="justify-content-md-center">
        <Col lg={6} xl={5}>
          <Form className="pb-4">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" disabled />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="your@email.com" disabled />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="5" disabled />
            </Form.Group>
            <Button type="submit" disabled>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}