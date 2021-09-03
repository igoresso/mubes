import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import ReactAudioPlayer from 'react-audio-player';
import { Helmet } from 'react-helmet';
import { Container, Spinner } from 'react-bootstrap';

import './Guests.scss';

const Guests = props => {
  const { guests, setGuests } = props;

  useEffect(() => {
    if (guests === null) {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxZEtsR1JY8RbwfkpYxTlCo7ExFs0oM_MK_6E_gwxKDdB7Z4HRTpwGq69-EYt0BGFNHRCCOMV0BJxJ/pub?output=csv',
        {
          download: true,
          header: true,
          complete: results => {
            setGuests(results.data.reverse());
          },
        }
      );
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Event Guests</title>
        <meta name='description' content='Get to know our event guests!' />
      </Helmet>

      <h1 className='page-title mb-5 pt-2 text-center'>Event Guests</h1>
      {guests === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul className='guests list-unstyled'>
          {guests.map(guest => (
            <li className='d-md-flex align-items-start mb-5' key={guest.id.toString()}>
              <img
                src={guest.img ? guest.img : 'img/male.png'}
                alt={guest.name}
                className='d-block rounded flex-shrink-0 mx-auto mr-md-4 mb-2'
                width='200'
              />
              <div className='d-flex flex-column align-items-center align-items-md-start'>
                <h2 className='h3 mb-1'>
                  {guest.name}
                  {guest.linkedin && (
                    <a
                      className='guests__link ml-2'
                      rel='noopener noreferrer'
                      href={guest.linkedin}
                      target='_blank'
                      aria-label={`Follow ${guest.name} on LinkedIn`}
                    >
                      <img
                        className='align-baseline'
                        src='img/linkedin.svg'
                        width='25'
                        height='25'
                        alt='LinkedIn logo'
                      />
                    </a>
                  )}
                </h2>
                <span className='d-block text-muted text-center text-md-left mb-3'>
                  {guest.position} at{' '}
                  <a rel='noopener noreferrer' href={guest.url} target='_blank'>
                    {guest.company}
                  </a>
                </span>
                <p>{guest.bio}</p>
                {guest.companyinfo && (
                  <>
                    <h3 className='h5'>About Company</h3>
                    <p>{guest.companyinfo}</p>
                  </>
                )}
                {guest.recording && (
                  <>
                    <h3 className='h6'>Event Recording</h3>
                    <ReactAudioPlayer src={guest.recording} controls />
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

Guests.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.object),
  setGuests: PropTypes.func.isRequired,
};

Guests.defaultProps = {
  guests: null,
};

export default Guests;
