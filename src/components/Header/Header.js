import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default () => (
  <header>
    <Navbar expand='lg' variant='light'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src='img/logo.svg' width='200' alt='MUBES logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' as='ul'>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/' activeClassName='active'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/membership' activeClassName='active'>
                Membership
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/committee' activeClassName='active'>
                Committee
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/events' activeClassName='active'>
                Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/contacts' activeClassName='active'>
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/subjects' activeClassName='active'>
                Subjects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/faq' activeClassName='active'>
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link as={NavLink} exact to='/guests' activeClassName='active'>
                Guests
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
