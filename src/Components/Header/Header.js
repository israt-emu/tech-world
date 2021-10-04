import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* navigation menu  */}
      <Navbar expand="lg" className="pt-3 shadow-sm">
        <Container>
          <Navbar.Brand href="/home" className="logo fs-2">
            Tech <span>World.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-4">
              <NavLink to="/home" className="link mx-3">
                Home
              </NavLink>
              <NavLink to="/about" className="link mx-3">
                About Us
              </NavLink>
              <NavLink to="/services" className="link mx-3">
                Services
              </NavLink>
              <NavLink to="/instructors" className="link mx-3">
                Instructors
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
