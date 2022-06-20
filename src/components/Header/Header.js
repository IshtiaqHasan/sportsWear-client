import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect className="shadow-lg  bg-dark " expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-danger m-0 p-0 fs-1 fw-bold" href="#home">
          Sportswear
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <p className="navigation-text fs-6 fw-bold m-0 p-0">Order</p>
            </Nav.Link>
            <Nav.Link>
              <p className="navigation-text fs-6 fw-bold m-0 p-0">Order Review</p>
            </Nav.Link>
            <Nav.Link>
              <p className="navigation-text fs-6 fw-bold m-0 p-0">Manage Inventory</p>
            </Nav.Link>
            <Nav.Link>
              <p className="navigation-text fs-6 fw-bold m-0 p-0">Login</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
