import React from 'react';
import './HeroArea.css'
import {Container, Row, Col, Image, Navbar, Nav} from "react-bootstrap";
import logo from "../img/hero_area/header_top/logo.png";

const HeroArea = () => {
  return (
    <header className={"hero_area"}>
      <Container className={"header_top"}>
        <Row>
          <Col xs={3}>
            <a href="#"><Image className={"logo"} src={logo} /></a>
          </Col>
          <Col xs={9}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home" className={"link-left"}>Home</Nav.Link>
                  <Nav.Link href="#link">Services</Nav.Link>
                  <Nav.Link href="#link">Project</Nav.Link>
                  <Nav.Link href="#link">Testimonial</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                  <Nav.Link href="#link"><button>Contact Us</button></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <Container className={"middle_section"}>
        <h1>It's easy to make a<br/>
          buck & tougher to<br/>
          make difference.</h1>
        <h5>The point of using Lorem Ipsum is that it has a more normal <br/>
          distribution of letters, as opposed to using content.</h5>
        <button>Discover More</button>
      </Container>
    </header>
  );
};

export default HeroArea;
