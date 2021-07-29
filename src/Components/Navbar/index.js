import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        data-test="navBar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
              }}
            >
              React-mall
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "white",
                }}
              >
                Cart
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
