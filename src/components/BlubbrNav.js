import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Discord } from "@icons-pack/react-simple-icons";

import blubbr_whale from "../assets/img/blubbr_whale.png";

export default function BlubbrNav() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="white">
      <Navbar.Brand href="/">
        <img
          src={blubbr_whale}
          width="30"
          height="30"
          className="d-inline-block align-top mr-1"
          alt="Blubbr"
        />
        Blubbr
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Discord color="#61DAFB" size={24}></Discord>
          <Button className="ml-2">Get Started</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
