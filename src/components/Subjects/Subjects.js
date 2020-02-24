import React, { useState } from 'react';
//import React, { useState, useEffect } from 'react';
import { Container, Spinner, Form, InputGroup, ToggleButtonGroup, ToggleButton, Card } from 'react-bootstrap';

import { subjects } from './subjects.json';
import { reviews } from './reviews.json';

subjects.forEach(subject =>{
  subject['reviews'] = reviews.filter(review => review.subjectCode === subject.code);
})

export default () => {
  const loading = false;
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

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">Subjects</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie ac. Varius duis at consectetur lorem donec massa. Id aliquet lectus proin nibh nisl condimentum id. Urna et pharetra pharetra massa massa ultricies mi quis.</p>
      { loading ? (
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
                { subjects.map(subject => <option value={ subject.code } key={ subject.id }>{ `${subject.code} - ${subject.name}` }</option>) }
              </Form.Control>
            </InputGroup>
          </Form>
          { subjects.filter(subject => 
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
                {subject.reviews.map(review =>
                  <blockquote className="blockquote mb-4" key={ review.id }>
                    <p>{ review.text }</p>
                    <footer className="blockquote-footer"><cite title={ review.author }>{ review.author } ({ review.year })</cite></footer>
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
  