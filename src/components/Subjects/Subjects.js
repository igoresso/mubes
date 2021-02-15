import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import Tabletop from 'tabletop';
import { Helmet } from "react-helmet";
import { Container, Spinner, Form, InputGroup, ToggleButtonGroup, ToggleButton, Card } from 'react-bootstrap';

import './Subjects.scss';

const Subjects = props => {
  const {subjects, setSubjects} = props;

  const [levelFilter, setLevelFilter] = useState("all")
  const [codeFilter, setCodeFilter] = useState("");

  const onLevelChange = value => {
    setLevelFilter(value);
    setCodeFilter("");
  }

  const onSubjectChange = event => {
    const value = event.target.value;
    setCodeFilter(value);
    setLevelFilter("all");
  }

  const fetchSubjects = () => {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1Q7lguf-60_rz_F57TpL0hEOmsivKCr_d8B4H7l2dyEs/pubhtml',
      prettyColumnNames: false,
      wanted: ["Subjects", "Reviews"] }
    ).then(data => {
      const subjects = data.Subjects.elements;
      const reviews = data.Reviews.elements;
      subjects.forEach(subject =>{
        subject['reviews'] = reviews.filter(review => review.subjectcode === subject.code).sort((a, b) => b.year - a.year);
      })
      setSubjects(subjects);
    })
  }

  useEffect(() => {
    if (subjects === null) {
      fetchSubjects();
    }
  })

  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Subjects</title>
        <meta name="description" content="MUBES is delighted to present you reviews for Biomedical Engineering major subjects. We hope this information will help you to make an informed choice." />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Subjects</h1>
      <p>Melbourne University Biomedical Engineering Society is delighted to present you reviews for Biomedical Engineering major subjects. We hope this will help you to make an informed choice. Subject structure including all assessments can be found in the Handbook. If you have any subject specific questions feel free to{' '}
        <Link to="/contacts">contact us</Link> directly.</p>
      { subjects === null ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <React.Fragment>
          <Form className="mb-3">
            <InputGroup>
              <InputGroup.Prepend as={ ToggleButtonGroup } type="radio" name="options" value={ levelFilter } onChange={ onLevelChange }>
                <ToggleButton value="all">All</ToggleButton>
                <ToggleButton value="undergrad">Undergrad</ToggleButton>
                <ToggleButton value="postgrad">Postgrad</ToggleButton>
              </InputGroup.Prepend>
              <Form.Control as="select" value={ codeFilter } onChange={ onSubjectChange }>
                <option value="">Select subject</option>
                { subjects
                    .filter(subject => subject.reviews.length > 0)
                    .map(subject => <option value={ subject.code } key={ subject.id }>{ `${subject.code} - ${subject.name}` }</option>) }
              </Form.Control>
            </InputGroup>
          </Form>
          { subjects.filter(subject => 
            (levelFilter === "all" && codeFilter === "") ||
            (levelFilter === "all" && subject.code === codeFilter) ||
            (codeFilter === "" && subject.level === levelFilter)
          ).filter(subject => subject.reviews.length > 0)
            .map(subject => 
            <Card className="mb-4" key={ subject.id }>
              <Card.Header>
                <h2 className="h4 m-0">{ `${subject.code} - ${subject.name}` }</h2>
                <a rel="noopener noreferrer" href={ subject.handbooklink } target="_blank">Handbook</a>
              </Card.Header>
              <Card.Body>
                <h3 className="h5">Reviews</h3>
                { subject.reviews.map(review =>
                  <blockquote className="blockquote mb-5" key={ review.id }>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(review.text) }} />
                    <footer className="blockquote-footer">
                      <cite title={ review.author }>{ review.author } ({ review.year })</cite>
                    </footer>
                  </blockquote>
                )}
              </Card.Body>
            </Card>
          )}
        </React.Fragment>
      )}
    </Container>
  );
}

Subjects.propTypes = {
  subjects: PropTypes.array,
  setSubjects: PropTypes.func
}

export default Subjects;