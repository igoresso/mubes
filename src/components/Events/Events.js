import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabletop from 'tabletop';
import { Helmet } from "react-helmet";
import { Tab, Nav, Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const Events = props => {
  const {events, setEvents} = props;
  const fetchEvents = () => {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1Q7lguf-60_rz_F57TpL0hEOmsivKCr_d8B4H7l2dyEs/pubhtml',
      simpleSheet: true,
      prettyColumnNames: false,
      wanted: ["Events"] }
    ).then(data => {
      setEvents(data);
    })
  }

  useEffect(() => {
    if (events === null) {
      fetchEvents();
    }
  })

  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Events</title>
        <meta name="description" content="Meet the committee!" />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Events</h1>

      { events === null ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Tab.Container id="event-tabs" defaultActiveKey="1">
          <Row className="mb-5">
            <Col lg={3} className="mb-4">
              <Nav variant="pills" className="flex-column">
                { events.map(event =>
                  <Nav.Item key={event.id}>
                    <Nav.Link eventKey={event.id}>{event.title}</Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                { events.map(event =>
                  <Tab.Pane key={event.id} eventKey={event.id}>
                    <Card>
                      <Row>
                        <Col md={4}>
                          <img src={event.img} alt={event.title} className="m-4"/>
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title as="h2" className="h5">{event.title}</Card.Title>
                            {
                              event.time ?
                                <Card.Subtitle className="mb-2">{event.time}</Card.Subtitle>
                                :
                                ''
                            }
                            <Card.Text>{event.description}</Card.Text>
                            {
                              event.link ?
                                <Card.Link href={event.link} className="btn btn-primary">Learn More</Card.Link>
                                :
                                <Card.Text><em>Stay tuned for more info!</em></Card.Text>
                            }
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Tab.Pane>
                )}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </Container>
  )
}

Events.propTypes = {
  events: PropTypes.array,
  setEvents: PropTypes.func
}

export default Events;