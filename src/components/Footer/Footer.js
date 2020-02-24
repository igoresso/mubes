import React from 'react';
import { Container } from 'react-bootstrap';

export default () => 
  <footer className="pt-4 pb-2 bg-light">
    <Container>
      <ul className="list-inline text-center">
        <li className="list-inline-item mr-3">
          <a rel="noopener noreferrer" href="https://www.facebook.com/groups/mubes.unimelb/" target="_blank" aria-label="Follow us on Facebook">
            <img
              src="img/facebook.svg"
              width="40"
              height="40"
              alt="Facebook logo"
            />
          </a>
        </li>
        <li className="list-inline-item mr-3">
          <a rel="noopener noreferrer" href="https://www.linkedin.com/company/mu-bmes/about/" target="_blank" aria-label="Follow us on LinkedIn">
            <img
              src="img/linkedin.svg"
              width="40"
              height="40"
              alt="LinkedIn logo"
            />
          </a>
        </li>
        <li className="list-inline-item">
          <a rel="noopener noreferrer" href="https://www.instagram.com/biomedeng_unimelb/" target="_blank" aria-label="Follow us on Instagram">
            <img
              src="img/instagram.svg"
              width="40"
              height="40"
              alt="Instagram logo"
            />
          </a>
        </li>
      </ul>
      <span className="d-block text-muted text-center">&copy; 2020 Melbourne University Biomedical Engineering Society</span>
    </Container>
  </footer>