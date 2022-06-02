import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet';
import { Container, Spinner, Accordion } from 'react-bootstrap';

import './Faq.scss';

function Faq(props) {
  const { faq, setFaq } = props;

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

      <h1 className='page-title mb-5 pt-3 text-center'>FAQ &amp; Answers</h1>
      {faq === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Accordion className='mb-5' defaultActiveKey='1' flush>
          {faq.map(entry => (
            <Accordion.Item key={entry.id} eventKey={entry.id}>
              <Accordion.Header>{entry.question}</Accordion.Header>
              <Accordion.Body
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.answer) }}
              />
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
}

Faq.propTypes = {
  faq: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  setFaq: PropTypes.func.isRequired,
};

Faq.defaultProps = {
  faq: null,
};

export default Faq;
