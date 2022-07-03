import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu() {
     return (
       <div>
 <Navbar collapseOnSelect expand="lg" bg="info" variant="light" >
      <Container>
        <Navbar.Brand as={Link} to="/">Daily Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link as={Link} to="/todo">To Do</Nav.Link>
            
    
          </Nav>
          <Nav className="fw-bold">
            <Nav.Link as={Link} to="/calender">Calender</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/completed">
          completed Task
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



       </div>
     )
   }
