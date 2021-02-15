import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <Container as="section">
      <Helmet>
        <title>MUBES - Membership</title>
        <meta name="description" content="Join the MUBES Society to connect with other students, staff and alumni." />
      </Helmet>

      <h1 className="page-title mb-5 pt-2 text-center">Membership</h1>

      <p className="lead">
        Join us by filling in < a rel="noopener noreferrer" href="https://mubes.getqpay.com/" target="_blank">this</a> form! Membership fee is $5 and can only be paid through our QPay form for now. Follow us on{' '}
        <a rel="noopener noreferrer" href="https://www.facebook.com/groups/mubes.unimelb/" target="_blank">Facebook</a>,{' '}
        <a rel="noopener noreferrer" href="https://www.linkedin.com/company/mu-bmes/about/" target="_blank">LinkedIn</a> and{' '}
        <a rel="noopener noreferrer" href="https://www.instagram.com/mubes_unimelb/" target="_blank">Instagram</a>.
      </p>

      <h2 className="display-6 text-center mt-5 mb-5">
        By signing up as a member, you will:
      </h2>

      <ul className="list-unstyled d-md-flex justify-content-between">
        <li className="text-center px-4 mb-5">
          <img
            src="img/calendar.svg"
            alt="Calendar"
            className="mb-3"
            width="150"
            height="150"
          />
          <span className="d-block lead mt-4"><strong>Be notified of <Link to='/events'> upcoming events</Link> (like free BBQ!)</strong></span>
        </li>
        <li className="text-center px-4 mb-5">
          <img
            src="img/newsletter.svg"
            alt="Newsletter"
            className="mb-3"
            width="150"
            height="150"
          />
          <span className="d-block lead mt-4"><strong>Gain access to our fortnightly newsletters</strong></span>
        </li>
        <li className="text-center px-4 mb-5">
          <img
            src="img/friendship.svg"
            alt="Community"
            className="mb-3"
            width="150"
            height="150"
          />
          <span className="d-block lead mt-4"><strong>Be part of a wholesome community</strong></span>
        </li>
      </ul>

    </Container>
  )
}
