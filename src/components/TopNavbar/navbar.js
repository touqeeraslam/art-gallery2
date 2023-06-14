import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container className="font">
          <Navbar.Brand className="fw-bolder" href="#">
            <img src={logo} className="px-2" alt="Logo" height="36" />
            Brownie Link Services
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto "
              style={{
                paddingLeft: "8rem",
              }}
            >
              <Nav.Link href="#link" className="text-dark bottom px-2">
                Law
              </Nav.Link>
              <Link to="/lawyer" className="nav-link text-dark bottom px-2">
                Lawyers
              </Link>
              <Nav.Link href="#link" className="text-dark bottom px-2">
                Firms
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark bottom px-2">
                FAQ's
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark bottom px-2">
                Login
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark bottom px-2">
                Register
              </Nav.Link>
            </Nav>

            <button
              className="btn btn-outline-primary"
              style={{ borderRadius: "12px" }}
            >
              Call us now
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
