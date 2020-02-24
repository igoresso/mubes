import React, { useState } from 'react';
//import React, { useState, useEffect } from 'react';
import { Container, Spinner, Accordion, Card, Button, useAccordionToggle } from 'react-bootstrap';

import './Faq.scss'

import { faq } from './data.json';

export default () => {
  const [panelIndex, setPanelIndex] = useState("1")

  const loading = false;
  //const [loading, setLoading] = useState(true);

  //useEffect(() => {}, [loading]);

  const CustomToggle = ({ children, eventKey }) => {
    const customOnClick = useAccordionToggle(eventKey, () => {
      setPanelIndex( eventKey === panelIndex ? null : eventKey )
    })

    const customClass = (eventKey === panelIndex) ? "text-left" : "text-left collapsed"

    return (
      <Button variant="link" block className={ customClass } onClick={ customOnClick }>
        { children }
      </Button>
    )
  }

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">FAQ &amp; Answers</h1>
      { loading ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Accordion defaultActiveKey="1" className="mb-4">
          { faq.map(entry => 
            <Card className="border rounded mb-1" key={ entry.id }>
              <Card.Header className="py-2">
                <CustomToggle eventKey={ entry.id.toString() }>
                  { entry.question }
                </CustomToggle> 
              </Card.Header>
              <Accordion.Collapse eventKey={entry.id.toString()}>
                <Card.Body>{ entry.answer }</Card.Body>
              </Accordion.Collapse>
          </Card>
          )}
        </Accordion>
      )}
    </Container>
  );
}
  