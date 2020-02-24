import React from 'react';
//import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';

import './Committee.scss'

import { committee } from './data.json';

export default () => {
  const loading = true;
  //const [loading, setLoading] = useState(true);

  //useEffect(() => {}, [loading]);

  return (
    <Container as="section">
      <h1 className="page-title mb-5 pt-2 text-center">Committee</h1>
      {loading ? (
        <div className="text-center m-5">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul className="committee list-unstyled d-sm-flex flex-wrap justify-content-between">
        {committee.map(member => 
          <li className="text-center mb-4 mb-sm-5 mx-auto" key={member.id.toString()}>
            <img src={member.img} alt={member.name} className="img-thumbnail rounded-circle mb-3" width="200" height="200" />
            <h2 className="h5 mb-1 px-2">{member.name}</h2>
            <span className="d-block text-muted text-center px-2">{member.role}</span>
          </li>
        )}
        </ul>
      )}
    </Container>
  );
}
  