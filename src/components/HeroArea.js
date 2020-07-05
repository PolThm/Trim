import React from 'react';
import './HeroArea.css'
import {Container, Row, Col, Image} from "react-bootstrap";
import logo from "../img/hero_area/header_top/logo.png";

const HeroArea = () => {
  return (
    <header>
      <Container className={"header_top"}>
        <Row>
          <Col xs={1} lg={3}>
            <a href="#"><Image className={"logo"} src={logo} /></a>
          </Col>
          <Col xs={11} lg={9}>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Blog</a></li>
                <li><button>Contact Us</button></li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
      <Container className={"middle_section"}>
        <h1>It's easy to make a <br/>
          buck & tougher to <br/>
          make difference.</h1>
        <h5>The point of using Lorem Ipsum is that it has a more normal <br/>
          distribution of letters, as opposed to using content.</h5>
        <button>Discover More</button>
      </Container>
    </header>
  );
};

export default HeroArea;
