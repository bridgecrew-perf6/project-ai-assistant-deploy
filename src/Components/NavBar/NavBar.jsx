import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
   return (
      <div>
         <Navbar bg="none" expand="lg" style={{ marginTop: "0.5rem" }}>
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">

                  {/* <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/conversationapp">Quick Conversation</Nav.Link>
                  <Nav.Link href="/proassistant">Assistant</Nav.Link>
                  <Nav.Link href="/newfeatures">New Features</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link> */}

                  <Link className="navbar__home-link" to="/">
                     <Nav.Link href="/">Home</Nav.Link>
                  </Link>
                  <Link className="navbar__conversationapp-link" to="/conversationapp">
                     <Nav.Link href="/conversationapp">Quick Conversation</Nav.Link>
                  </Link>
                  <Link className="navbar__proassistant-link" to="/proassistant">
                     <Nav.Link href="/proassistant">Assistant</Nav.Link>
                  </Link>
                  <Link className="navbar__newfeatures-link" to="/newfeatures">
                     <Nav.Link href="/newfeatures">New Features</Nav.Link>
                  </Link>
                  <Link className="navbar__about-link" to="/about">
                     <Nav.Link href="/about">About</Nav.Link> 
                  </Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default NavBar;