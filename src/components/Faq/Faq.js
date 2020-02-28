import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import { Container, Spinner, Accordion, Card, Button, useAccordionToggle } from 'react-bootstrap';

import './Faq.scss'

export default (props) => {
  const [panelIndex, setPanelIndex] = useState("1");

  const CustomToggle = ({ children, eventKey }) => {
    const customOnClick = useAccordionToggle(eventKey, () => {
      setPanelIndex( eventKey === panelIndex ? null : eventKey )
    })

    const customClass = (eventKey === panelIndex) ? "pr-4 text-left" : "pr-4 text-left collapsed"

    return (
      <Button variant="link" block className={ customClass } onClick={ customOnClick }>
        { children }
      </Button>
    )
  }

  const fetchFaq = () => {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1Q7lguf-60_rz_F57TpL0hEOmsivKCr_d8B4H7l2dyEs/pubhtml',
      simpleSheet: true,
      prettyColumnNames: false,
      wanted: ["FAQ"] }
    ).then(data => { 
      props.setFaq(data);
    })
  }

  useEffect(() => {
    if (!props.faq) {
      fetchFaq();
    }
  })

  useEffect(() => {
    document.title = "MUBES - FAQ";
  })

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">FAQ &amp; Answers</h1>
      { !props.faq ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Accordion defaultActiveKey="1" className="mb-4">
          { props.faq.map(entry => 
            <Card className="border rounded mb-1" key={ entry.id }>
              <Card.Header className="py-2">
                <CustomToggle eventKey={ entry.id.toString() }>
                  { entry.question }
                </CustomToggle> 
              </Card.Header>
              <Accordion.Collapse eventKey={entry.id.toString()}>
                <Card.Body dangerouslySetInnerHTML={{ __html: entry.answer }} />
              </Accordion.Collapse>
          </Card>
          )}
        </Accordion>
      )}
    </Container>
  );
}
  