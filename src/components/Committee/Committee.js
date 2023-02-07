import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet';
import { Container, Spinner } from 'react-bootstrap';

import './Committee.scss';

function Committee(props) {
  const { committee, setCommittee } = props;

  useEffect(() => {
    if (committee == null) {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3XX_aIm6CzCen_7jjvTnjhy1f_uryXjU1JTGceFx4l5y4OEP7ksZzF4_rja_KwavP0bdYlrfGOGe2/pub?output=csv',
        {
          download: true,
          header: true,
          complete: results => {
            setCommittee(results.data);
          },
        }
      );
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Committee</title>
        <meta name='description' content='Meet the committee!' />
      </Helmet>

      <h1 className='page-title mb-5 pt-3 text-center'>Committee</h1>

      {committee === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul className='committee list-unstyled d-sm-flex flex-wrap justify-content-between mb-5'>
          {committee.map(member => (
            <li className='text-center mb-4 mb-sm-5 mx-auto' key={member.id}>
              <img
                src={member.img ? member.img : 'img/male.png'}
                alt={member.name}
                className='img-thumbnail rounded-circle mb-3'
                width='220'
                height='220'
              />
              <h2 className='h5 mb-1 px-2'>{member.name}</h2>
              <span className='d-block text-muted text-center px-2'>{member.role}</span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

Committee.propTypes = {
  committee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
      role: PropTypes.string.isRequired,
    })
  ),
  setCommittee: PropTypes.func.isRequired,
};

Committee.defaultProps = {
  committee: null,
};

export default Committee;
