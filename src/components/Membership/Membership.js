import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import Recaptcha from 'react-recaptcha';
import * as Yup from 'yup';
import { Container, Form, Col, Button, Spinner, Alert } from 'react-bootstrap';

import './Membership.scss';

const schema = Yup.object({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
  studentNumber: Yup.number("Please enter a valid student number"),
  international: Yup.string().required(),
  graduate: Yup.string().required(),
  over18: Yup.string().required(),
  recaptcha: Yup.string().required()
});

export default () => {
  const [showAlert, setShowAlert] = useState(false);
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
      setAlertVariant("danger");
      setAlertMessage("Oh, no! Something is wrong.");
      setShowAlert(true);
    })
  }

  useEffect(() => {
    document.title = "MUBES - Membership";
  })

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">Membership</h1>
      <p>
        Join us by filling in the form below! Membership fee is $5 and can be paid by cash at any of our events. Follow us on{' '}
        <a rel="noopener noreferrer" href="https://www.facebook.com/groups/mubes.unimelb/" target="_blank">Facebook</a>,{' '}
        <a rel="noopener noreferrer" href="https://www.linkedin.com/company/mu-bmes/about/" target="_blank">LinkedIn</a> and{' '}
        <a rel="noopener noreferrer" href="https://www.instagram.com/biomedeng_unimelb/" target="_blank">Instagram</a>.
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          studentNumber: "",
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
              <Form.Group as={Col} md={6} controlId="studentNumber">
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
              verifyCallback={ res => setFieldValue('recaptcha', res) }
              expiredCallback={ res => setFieldValue('recaptcha', "") }
              className="mb-2"
            />
            <Button type="submit" disabled={ isSubmitting || errors.recaptcha }>
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
    </Container>
  )
}
