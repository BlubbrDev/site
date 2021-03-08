import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import blubbr_whale from "../../assets/img/blubbr_whale.png";

export default function NavBar() {
  return (
    <Container id="home" fluid="lg">
      <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={blubbr_whale}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Blubbr"
          />
          Blubbr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button href="/discord" variant="outline-primary" className="ml-2">
              Join Discord
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
