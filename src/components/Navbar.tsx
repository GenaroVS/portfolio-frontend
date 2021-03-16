import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Navbar.css';

const NavBar = () => {

  var handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    var element = e.currentTarget;
    element.classList.add('current');
  }

  return (
    <Navbar className='nav' collapseOnSelect bg='light' expand='md'>
      <Link to='/'>
        <Navbar.Brand href='/'>Genaro V. Salinas</Navbar.Brand>
      </Link>
      <Navbar.Toggle label='Toggle Navigation' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav onClick={handleClick} className='ml-auto'>
          <Link to='/'>
            <Nav.Link className='nav-link' href='#home'>Home</Nav.Link>
          </Link>
          <Link to='/projects'>
            <Nav.Link className='nav-link' href='#projects'>Projects</Nav.Link>
          </Link>
          <Link to='/contact'>
            <Nav.Link className='nav-link' href='#contact'>Contact</Nav.Link>
          </Link>
          <Link to='/links'>
            <Nav.Link className='nav-link' href='#links'>Link Library</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
