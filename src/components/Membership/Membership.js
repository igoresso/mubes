import React, { useEffect } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';

export default () => {
  useEffect(() => {
    document.title = "MUBES - Membership";
  })

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">Membership</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum totam architecto laboriosam doloremque! Esse eveniet quia, aut quo omnis assumenda temporibus ducimus consequatur expedita natus, doloribus odit maxime labore.</p>
      <Form className="pb-4">
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" disabled />
            <Form.Control.Feedback type="invalid">
              Please enter your first name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" disabled />
            <Form.Control.Feedback type="invalid">
              Please enter your last name
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="your@email.com" disabled />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="studentNumber">
            <Form.Label>Student number</Form.Label>
            <Form.Control type="text" name="studentNumber" placeholder="#######" disabled />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <span>Are you an international student?</span>
          <Form.Check 
            custom
            type="radio"
            name="international"
            label="Yes"
            id="international"
            disabled
          />
          <Form.Check 
            custom
            type="radio"
            name="international"
            label="No"
            id="domestic"
            disabled
          />
        </Form.Group>
        <Form.Group>
          <span>Are you a graduate student?</span>
          <Form.Check 
            custom
            type="radio"
            name="graduate"
            label="Yes"
            id="undergraduate"
            disabled
          />
          <Form.Check 
            custom
            type="radio"
            name="graduate"
            label="No"
            id="postgraduate"
            disabled
          />
        </Form.Group>
        <Form.Group>
          <span>Are you over 18?</span>
          <Form.Check 
            custom
            type="radio"
            name="over18"
            label="Yes"
            id="over18"
            disabled
          />
          <Form.Check 
            custom
            type="radio"
            name="over18"
            label="No"
            id="under18"
            disabled
          />
        </Form.Group>
        <Button type="submit" disabled>Submit</Button>
      </Form>
    </Container>
  )
}
