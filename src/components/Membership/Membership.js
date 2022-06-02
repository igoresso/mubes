import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

function Membership() {
  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Membership</title>
        <meta
          name='description'
          content='Join the MUBES Society to connect with other students, staff and alumni.'
        />
      </Helmet>

      <h1 className='page-title mb-5 pt-3 text-center'>Membership</h1>

      <p className='lead'>
        Join us{' '}
        <a
          rel='noopener noreferrer'
          href='https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6245/'
          target='_blank'
          className='fw-bolder text-decoration-none'
        >
          here
        </a>
        ! Follow us on{' '}
        <a
          rel='noopener noreferrer'
          href='https://www.facebook.com/groups/mubes.unimelb/'
          target='_blank'
          className='text-decoration-none'
        >
          Facebook
        </a>
        ,{' '}
        <a
          rel='noopener noreferrer'
          href='https://www.linkedin.com/company/mu-bmes/about/'
          target='_blank'
          className='text-decoration-none'
        >
          LinkedIn
        </a>{' '}
        and{' '}
        <a
          rel='noopener noreferrer'
          href='https://www.instagram.com/mubes_unimelb/'
          target='_blank'
          className='text-decoration-none'
        >
          Instagram
        </a>
        .
      </p>

      <h2 className='display-6 text-center mt-5 mb-5'>By signing up as a member, you will:</h2>

      <Row className='list-unstyled' as='ul'>
        <Col className='text-center mb-5' md={4} as='li'>
          <img src='img/calendar.svg' alt='Calendar' className='mb-3' width='150' height='150' />
          <span className='d-block lead mt-4 fs-4'>
            <strong>
              Be notified of{' '}
              <Link to='/events' className='text-decoration-none'>
                {' '}
                upcoming events
              </Link>{' '}
              (like free BBQ!)
            </strong>
          </span>
        </Col>
        <Col className='text-center mb-5' md={4} as='li'>
          <img
            src='img/newsletter.svg'
            alt='Newsletter'
            className='mb-3'
            width='150'
            height='150'
          />
          <span className='d-block lead mt-4 fs-4'>
            <strong>Gain access to our fortnightly newsletters</strong>
          </span>
        </Col>
        <Col className='text-center mb-5' md={4} as='li'>
          <img src='img/friendship.svg' alt='Community' className='mb-3' width='150' height='150' />
          <span className='d-block lead mt-4 fs-4'>
            <strong>Be part of a wholesome community</strong>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Membership;
