import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import { Container, Spinner, Form, InputGroup, ToggleButtonGroup, ToggleButton, Card } from 'react-bootstrap';

import './Subjects.scss';

export default (props) => {
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
        subject['reviews'] = reviews.filter(review => review.subjectcode === subject.code);
      })
      props.setSubjects(subjects);
    })
  }

  useEffect(() => {
    if (!props.subjects) {
      fetchSubjects();
    }
  })

  useEffect(() => {
    document.title = "MUBES - Subjects";
  })

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">Subjects</h1>
      <p>Melbourne University Biomedical Engineering Society is delighted to present you reviews for Biomedical Engineering major subjects. We hope this will help you to make an informed choice. Subject structure including all assessments can be found in the Handbook. If you have any subject specific questions feel free to contact us directly.</p>
      { !props.subjects ? (
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
                { props.subjects.map(subject => <option value={ subject.code } key={ subject.id }>{ `${subject.code} - ${subject.name}` }</option>) }
              </Form.Control>
            </InputGroup>
          </Form>
          { props.subjects.filter(subject => 
            (levelFilter === "all" && codeFilter === "") ||
            (levelFilter === "all" && subject.code === codeFilter) ||
            (codeFilter === "" && subject.level === levelFilter)
          ).map(subject => 
            <Card className="mb-4" key={ subject.id }>
              <Card.Header>
                <h2 className="h4 m-0">{ `${subject.code} - ${subject.name}` }</h2>
                <a rel="noopener noreferrer" href={ subject.handbookLink } target="_blank">Handbook</a>
              </Card.Header>
              <Card.Body>
                <h3 className="h5">Reviews</h3>
                { subject.reviews.map(review =>
                  <blockquote className="blockquote mb-5" key={ review.id }>
                    <p dangerouslySetInnerHTML={{ __html: review.text }} />
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
  