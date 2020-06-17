import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../pics/toutpetit.png';
import { routes } from '../routes';

export const Layout = ({ children }) => (
  <>
    <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="changeMe">
      <Navbar.Brand href="/" className="text-white logo-text"><img src={logo} alt="Logo" /> | Jenaye</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto justify-content-end">
          { routes.map((item, key) => (
            <>
              <Nav.Link key={key} href={ item.path } className="text-white logo-text">{ item.label }</Nav.Link>
              <span className='my-auto text-white d-none d-lg-inline-flex'>
                { routes[key + 1] ? ' | ' : '' }
              </span>
              
            </>
          )) }
          <span className='my-auto logo-text cv'> 
                 <a target='_blank' rel='noreferrer' className='cv' href='/cv.pdf'>- CV -</a>
              </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='container'>
      { children }
    </div>
  </>
);
