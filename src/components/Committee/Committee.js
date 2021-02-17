import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabletop from 'tabletop';
import { Helmet } from 'react-helmet';
import { Container, Spinner } from 'react-bootstrap';

import './Committee.scss';

const Committee = props => {
  const { committee, setCommittee } = props;
  const fetchCommittee = () => {
    Tabletop.init({
      key:
        'https://docs.google.com/spreadsheets/d/1Q7lguf-60_rz_F57TpL0hEOmsivKCr_d8B4H7l2dyEs/pubhtml',
      simpleSheet: true,
      prettyColumnNames: false,
      wanted: ['Committee'],
    }).then(data => {
      setCommittee(data);
    });
  };

  useEffect(() => {
    if (committee === null) {
      fetchCommittee();
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Committee</title>
        <meta name='description' content='Meet the committee!' />
      </Helmet>

      <h1 className='page-title mb-5 pt-2 text-center'>Committee</h1>

      {committee === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul className='committee list-unstyled d-sm-flex flex-wrap justify-content-between mb-5'>
          {committee.map(member => (
            <li className='text-center mb-4 mb-sm-5 mx-auto' key={member.id.toString()}>
              <img
                src={member.img ? member.img : 'img/male.png'}
                alt={member.name}
                className='img-thumbnail rounded-circle mb-3'
                width='200'
                height='200'
              />
              <h2 className='h5 mb-1 px-2'>{member.name}</h2>
              <span className='d-block text-muted text-center px-2'>{member.role}</span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

Committee.propTypes = {
  committee: PropTypes.arrayOf(PropTypes.object),
  setCommittee: PropTypes.func.isRequired,
};

Committee.defaultProps = {
  committee: null,
};

export default Committee;
