import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-danger fs-1 fw-bold" href="#home">
          Sportswear
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white fs-6 fw-bold">Order</Nav.Link>
            <Nav.Link className="text-white fs-6 fw-bold">
              Order Review
            </Nav.Link>
            <Nav.Link className="text-white fs-6 fw-bold">
              Manage Inventory
            </Nav.Link>
            <Nav.Link className="text-white fs-6 fw-bold">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
