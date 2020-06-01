import React, { useEffect } from 'react';
import Tabletop from 'tabletop';
import { Helmet } from "react-helmet";
import { Container, Spinner } from 'react-bootstrap';

import './Guests.scss';

export default (props) => {
  const fetchGuests = () => {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1Q7lguf-60_rz_F57TpL0hEOmsivKCr_d8B4H7l2dyEs/pubhtml',
      simpleSheet: true,
      prettyColumnNames: false,
      wanted: ["Guests"] }
    ).then(data => { 
      props.setGuests(data);
    })
  }

  useEffect(() => {
    if (!props.guests) {
      fetchGuests();
    }
  })

  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Event Guests</title>
        <meta name="description" content="Get to know our event guests!" />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Event Guests</h1>
      { !props.guests ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul className="guests list-unstyled">
        { props.guests.map(guest =>
          <li className="d-md-flex align-items-start mb-5" key={ guest.id.toString() }>
            <img
              src={ guest.img ? guest.img : "img/male.png" }
              alt={ guest.name }
              className="d-block rounded flex-shrink-0 mx-auto mr-md-4 mb-2"
              width="200"
            />
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <h2 className="h3 mb-1">{ guest.name }
                { guest.linkedin &&
                  <a className="guests__link ml-2" rel="noopener noreferrer" href={ guest.linkedin } target="_blank" aria-label={ "Follow " + guest.name + " on LinkedIn" }>
                  <img
                    className="align-baseline"
                    src="img/linkedin.svg"
                    width="25"
                    height="25"
                    alt="LinkedIn logo"
                  />
                </a>
                }
              </h2>
              <span className="d-block text-muted text-center text-md-left mb-3">{ guest.position } at <a rel="noopener noreferrer" href={ guest.url } target="_blank">{ guest.company }</a></span>
              <p>{ guest.bio }</p>
              <h3 className="h5">About Company</h3>
              <p>{ guest.companyinfo }</p>
              { guest.recording &&
                <span className="text-muted">The recording is available <a rel="noopener noreferrer" href={ guest.recording } target="_blank">here</a>.</span>
              }
            </div>
          </li>
        )}
        </ul>
      )}
    </Container>
  );
}
  