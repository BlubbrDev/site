import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Discord } from "@icons-pack/react-simple-icons";
import blubbr_whale from "../../assets/img/blubbr_whale.png";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="white"
      className="mx-5 mt-2"
    >
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
          <Nav.Link href="/discord">
            <Discord color="#6FCEDC" size={24}></Discord>
          </Nav.Link>
          <Button className="ml-2">Get Started</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
