import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet';
import { Container, Spinner, Accordion, Card, Button, useAccordionToggle } from 'react-bootstrap';

import './Faq.scss';

const Faq = props => {
  const { faq, setFaq } = props;
  const [panelIndex, setPanelIndex] = useState('1');

  const CustomToggle = ({ children, eventKey }) => {
    const customOnClick = useAccordionToggle(eventKey, () => {
      setPanelIndex(eventKey === panelIndex ? null : eventKey);
    });

    const customClass = eventKey === panelIndex ? 'pr-4 text-left' : 'pr-4 text-left collapsed';

    return (
      <Button variant='link' block className={customClass} onClick={customOnClick}>
        {children}
      </Button>
    );
  };

  CustomToggle.propTypes = {
    children: PropTypes.string.isRequired,
    eventKey: PropTypes.string.isRequired,
  };

  useEffect(() => {
    if (faq == null) {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdUsasIhTwWmYrqI7_eI7y2XyEhE5fq0QmD7jVDpzwyN3uhbMd9wIM3WEePxhK8AKClUkfW1nvFI0T/pub?output=csv',
        {
          download: true,
          header: true,
          complete: results => {
            setFaq(results.data);
          },
        }
      );
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - FAQ</title>
        <meta name='description' content='Find the answers to frequently asked questions.' />
      </Helmet>

      <h1 className='page-title mb-5 pt-2 text-center'>FAQ &amp; Answers</h1>
      {faq === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Accordion defaultActiveKey='1' className='mb-5'>
          {faq.map(entry => (
            <Card className='border rounded mb-1' key={entry.id}>
              <Card.Header className='p-2 pr-3'>
                <CustomToggle eventKey={entry.id.toString()}>{entry.question}</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={entry.id.toString()}>
                <Card.Body dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.answer) }} />
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

Faq.propTypes = {
  faq: PropTypes.arrayOf(PropTypes.object),
  setFaq: PropTypes.func.isRequired,
};

Faq.defaultProps = {
  faq: null,
};

export default Faq;
