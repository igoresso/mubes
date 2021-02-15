import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from "react-helmet";
import { Container, Form, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';

const schema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
  subject: Yup.string().required("Please enter a subject"),
  message: Yup.string().required("Please enter your message"),
  recaptcha: Yup.string().required()
});

export default () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (values, actions) => {
    const formData = new FormData();
    formData.set('name', values.name);
    formData.set('email', values.email);
    formData.set('subject', values.subject);
    formData.set('message', values.message);
    formData.set('recaptcha', values.recaptcha);

    const url = "";
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      actions.resetForm();
      setAlertVariant("success");
      setAlertMessage("Thank you for contacting us. We will get back to you soon!");
      setShowAlert(true);
    })
    .catch(error => {
      actions.setSubmitting(false)
      setAlertVariant("danger");
      setAlertMessage("Oh, no! Something is wrong.");
      setShowAlert(true);
    })
  }

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
          <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
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
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John Snow"
                  value={ values.name }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.name }
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  { errors.name }
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={ values.email }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.email }
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  { errors.email }
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={ values.subject }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.subject }
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  { errors.subject }
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea" 
                  rows="5"
                  name="message"
                  value={ values.message }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  isInvalid={ submitCount>0 && !!errors.message }
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  { errors.message }
                </Form.Control.Feedback>
              </Form.Group>
              {/*
              <Recaptcha
                sitekey="6Ldeb9wUAAAAAKDaIIz8AObKkIvDtEY8R4XtvVTW"
                render="explicit"
                onloadCallback={() => true}
                verifyCallback={ res => setFieldValue('recaptcha', res) }
                expiredCallback={ res => setFieldValue('recaptcha', "") }
              />
              */}
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
          </Formik>
          { showAlert &&
            <Alert variant={ alertVariant } onClose={ () => setShowAlert(false) } dismissible>
              { alertMessage }
            </Alert>
          }
        </Col>
      </Row>
    </Container>
  )
}