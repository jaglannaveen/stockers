import React from "react";

import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navebar() {
  return (
    <>
     

      <Navbar expand="lg" className="custom-nav">
        <Container>
          <Navbar className="Brand" href="#">
            Stockrs
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 my-head-link"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Shop All Auctions</Nav.Link>
              <Nav.Link href="#action2">For Buyers</Nav.Link>
              <Nav.Link href="#action2">For Sellers</Nav.Link>
              <Nav.Link href="#action2"> Support</Nav.Link>
            </Nav>
            <Form>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
              <FontAwesomeIcon icon="fa-light fa-magnifying-glass" />
              <i class="fa-solid fa-user"></i>
              <Button className="browsemarketplace" variant="primary">
                Browse Marketplaces
              </Button>

              <Button className="buttonSign" variant="primary">
                Sign In
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
        );
    }
    
    export default Navebar;