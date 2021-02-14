import React, { useState } from 'react';
//import { Formik } from 'formik';
//import Recaptcha from 'react-recaptcha';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Form, Col, Row, Button, Spinner, Alert, Jumbotron } from 'react-bootstrap';

import './Membership.scss';

const schema = Yup.object({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
  studentNumber: Yup.number("Please enter a valid student number"),
  course: Yup.string("Please enter a valid course"),
  international: Yup.string().required(),
  graduate: Yup.string().required(),
  over18: Yup.string().required(),
  recaptcha: Yup.string().required()
});

export default () => {
  /*const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (values, actions) => {
    const date = new Date();
    const utcDate = date.toUTCString();

    const formData = new FormData();
    formData.set('timeStamp', utcDate);
    formData.set('firstName', values.firstName);
    formData.set('lastName', values.lastName);
    formData.set('email', values.email);
    formData.set('studentNumber', values.studentNumber);
    formData.set('course', values.course);
    formData.set('international', values.international);
    formData.set('graduate', values.graduate);
    formData.set('over18', values.over18);
    formData.set('recaptcha', values.recaptcha);

    const url = "https://script.google.com/macros/s/AKfycbweNVIGc--YLlFpiAe6ySWJJW9IAsFVDX46AlJu6eciXlwtzLC7/exec";
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      actions.resetForm();
      setAlertVariant("success");
      setAlertMessage("The form has been submitted successfully!");
      setShowAlert(true);
    })
    .catch(error => {
      actions.setSubmitting(false)
      setAlertVariant("danger");
      setAlertMessage("Oh, no! Something is wrong.");
      setShowAlert(true);
    })
  }*/

  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Membership</title>
        <meta name="description" content="Join the MUBES Society to connect with other students, staff and alumni." />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Membership</h1>

      <h1 className = "text-center pb-3">
        Want to get involved?
      </h1>

      <Carousel className = "pb-5">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="img/BBQ.jpg"
            alt="First slide"
          />
          <Carousel.Caption className = "justify-right">
            <h2 className = "display-4"><b>Start of Semester BBQ</b></h2>
            <h5><b>Socialize with like-minded people</b></h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="img/trivia.jpg"
              alt="Third slide"
            />
          <Carousel.Caption>
            <h2 className = "display-4"><b>Join us on our Trivia Night</b></h2>
            <h5><b>Win amazing prizes</b></h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/lecture.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className = "display-4"><b>Take part in our Makerthon</b></h2>
            <h5><b>Challenge yourselves</b></h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h4 className = "text-left">
        By signing up as a member, you will:
      </h4>
      <ul class="list-group list-group-flush" className="text-left">
        <li class="list-group-item borderless">
          <h5>☑ Be notified of <Link to='/events'> upcoming</Link> events (like free BBQ!)</h5>
        </li>
        <li class="list-group-item borderless">
          <h5>☑ Gain access to our fortnightly newsletters</h5>
        </li>
        <li class="list-group-item borderless">
          <h5>☑ Be part of a wholesome community</h5>
        </li>
      </ul>

      <h4 className = "text-center pb-5 pt-3">
        Join us by filling in{' '}
        <a rel="noopener noreferrer" href="https://mubes.getqpay.com/" target="_blank">this</a>{' '}form! 
        Membership fee is $5 and can only be paid through our QPay form for now. Follow us on{' '}
        <a rel="noopener noreferrer" href="https://www.facebook.com/groups/mubes.unimelb/" target="_blank">Facebook</a>,{' '}
        <a rel="noopener noreferrer" href="https://www.linkedin.com/company/mu-bmes/about/" target="_blank">LinkedIn</a> and{' '}
        <a rel="noopener noreferrer" href="https://www.instagram.com/mubes_unimelb/" target="_blank">Instagram</a>.
      </h4>


      {/*<Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          studentNumber: "",
          course: "",
          international: "",
          graduate: "",
          over18: "",
          recaptcha: ""
        }}
        validationSchema={ schema }
        onSubmit={ handleSubmit }
        validateOnMount
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          submitCount
        }) => (
          <Form className="pb-4" noValidate onSubmit={ handleSubmit }>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={ values.firstName }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.firstName }
                />
                <Form.Control.Feedback type="invalid">
                  { errors.firstName }
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Snow"
                  value={ values.lastName }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.lastName }
                />
                <Form.Control.Feedback type="invalid">
                  { errors.lastName }
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={ values.email }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.email }
                />
                <Form.Control.Feedback type="invalid">
                  { errors.email }
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="studentNumber">
                <Form.Label>Student number</Form.Label>
                <Form.Control
                  type="text"
                  name="studentNumber"
                  placeholder="#######"
                  value={ values.studentNumber }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.studentNumber }
                />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="course">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  name="course"
                  placeholder="MEng (Biomedical)"
                  value={ values.course }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.studentNumber }
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <span>Are you an international student?</span>
              <Form.Check 
                custom
                type="radio"
                name="international"
                value={ values.international }
                label="Yes"
                id="international"
                checked={ values.international === 'yes' }
                onChange={() => {
                  setFieldValue('international', 'yes')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.international }
              />
              <Form.Check 
                custom
                type="radio"
                name="international"
                value={ values.international }
                label="No"
                id="domestic"
                checked={ values.international === 'no' }
                onChange={() => {
                  setFieldValue('international', 'no')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.international }
              />
              <Form.Check 
                custom
                type="radio"
                name="international"
                value={ values.international }
                label="N/A"
                id="notApplicableInternational"
                checked={ values.international === 'N/A' }
                onChange={() => {
                  setFieldValue('international', 'N/A')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.international }
              />
            </Form.Group>
            <Form.Group>
              <span>Are you a graduate student?</span>
              <Form.Check
                custom
                type="radio"
                name="graduate"
                value={ values.graduate }
                label="Yes"
                id="postgraduate"
                checked={ values.graduate === 'yes' }
                onChange={() => {
                  setFieldValue('graduate', 'yes')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.graduate }
              />
              <Form.Check
                custom
                type="radio"
                name="graduate"
                value={ values.graduate }
                label="No"
                id="undergraduate"
                checked={ values.graduate === 'no' }
                onChange={() => {
                  setFieldValue('graduate', 'no')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.graduate }
              />
              <Form.Check
                custom
                type="radio"
                name="graduate"
                value={ values.graduate }
                label="N/A"
                id="notApplicableGraduate"
                checked={ values.graduate === 'N/A' }
                onChange={() => {
                  setFieldValue('graduate', 'N/A')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.graduate }
              />
            </Form.Group>
            <Form.Group>
              <span>Are you over 18?</span>
              <Form.Check
                custom
                type="radio"
                name="over18"
                value={ values.over18 }
                label="Yes"
                id="over18"
                checked={ values.over18 === 'yes' }
                onChange={() => {
                  setFieldValue('over18', 'yes')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.over18 }
              />
              <Form.Check
                custom
                type="radio"
                name="over18"
                value={ values.over18 }
                label="No"
                id="under18"
                checked={ values.over18 === 'no' }
                onChange={() => {
                  setFieldValue('over18', 'no')
                }}
                onBlur={ handleBlur }
                isInvalid={ submitCount>0 && !!errors.over18 }
              />
            </Form.Group>
            <Recaptcha
              sitekey="6Ldeb9wUAAAAAKDaIIz8AObKkIvDtEY8R4XtvVTW"
              render="explicit"
              onloadCallback={() => console.log('ReCaptcha is ready!')}
              verifyCallback={ res => setFieldValue('recaptcha', res) }
              expiredCallback={ res => setFieldValue('recaptcha', "") }
            />
            <Button type="submit" className="mt-2" disabled={ isSubmitting || errors.recaptcha }>
              { isSubmitting &&
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  className="mr-1"
                  role="status"
                  aria-hidden="true"
                />
              }
              { isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
            </Formik>*/}
      {/*{ showAlert &&
        <Alert variant={ alertVariant } onClose={ () => setShowAlert(false) } dismissible>
          { alertMessage }
        </Alert>
      }*/}
    </Container>
  )
}
