import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar expand='lg' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src='img/logo.svg' width='200' height='56' alt='MUBES logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto fs-5' as='ul'>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/membership' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Membership
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/committee' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Committee
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/events' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Events
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/contacts' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Contacts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/subjects' className='py-3 px-3 px-lg-2 px-xl-3'>
                  Subjects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/faq' className='py-3 px-3 px-lg-2 px-xl-3'>
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link as={NavLink} to='/guests' className='py-3 px-lg-2 px-xl-3 px-3'>
                  Guests
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
