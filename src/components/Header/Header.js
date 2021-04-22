import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default () => (
  <header>
    <Navbar expand='lg' variant='light'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src='img/logo.svg' width='200' height='56' alt='MUBES logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' as='ul'>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/membership'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Membership
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/committee'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Committee
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/events'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/contacts'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/subjects'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                Subjects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/faq'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0 mr-3'
              >
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link
                as={NavLink}
                exact
                to='/guests'
                activeClassName='active'
                className='py-3 pl-3 px-lg-0'
              >
                Guests
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
