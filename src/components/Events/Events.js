import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import DOMPurify from 'dompurify';
import parse, { domToReact } from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { Tab, Nav, Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const options = {
  replace: domNode => {
    if (domNode.name === 'p') {
      return <Card.Text>{domToReact(domNode.children, options)}</Card.Text>;
    }
    return false;
  },
};
function Events(props) {
  const { events, setEvents } = props;

  useEffect(() => {
    if (events == null) {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-7FihsepbXoDapzhPK4oMIfjkh8aHVtnFXUfk_TWJVcFVuYwVgAdvVAzjxFy1XSXVTHe8N0Ao3uts/pub?output=csv',
        {
          download: true,
          header: true,
          complete: results => {
            setEvents(results.data);
          },
        }
      );
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Events</title>
        <meta name='description' content='Meet the committee!' />
      </Helmet>

      <h1 className='page-title mb-5 pt-3 text-center'>Events</h1>

      {events === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Tab.Container id='event-tabs' defaultActiveKey='1'>
          <Row className='mb-5'>
            <Col lg={3} className='mb-4'>
              <Nav variant='pills' className='flex-column'>
                {events.map(event => (
                  <Nav.Item key={event.id}>
                    <Nav.Link eventKey={event.id} role='button'>
                      {event.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                {events.map(event => (
                  <Tab.Pane key={event.id} eventKey={event.id}>
                    <Card>
                      <Row>
                        <Col md={4}>
                          <img src={event.img} alt={event.title} className='m-4' />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title as='h2' className='h5'>
                              {event.title}
                            </Card.Title>
                            {event.time ? (
                              <Card.Subtitle className='mb-2'>{event.time}</Card.Subtitle>
                            ) : (
                              ''
                            )}
                            {parse(DOMPurify.sanitize(event.description), options)}
                            {event.link && (
                              <Card.Link href={event.link} className='btn btn-primary'>
                                Learn More
                              </Card.Link>
                            )}
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </Container>
  );
}

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  setEvents: PropTypes.func.isRequired,
};

Events.defaultProps = {
  events: null,
};

export default Events;
