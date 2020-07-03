import React from 'react';
import './HeroArea.css'
import {Container, Row, Col, Image} from "react-bootstrap";
import logo from "../img/hero_area/header_top/logo.png";

const HeroArea = () => {
  return (
    <header>
      <div className={"header_top"}>
        <Container>
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
      </div>
      <div className={"middle_section"}>

      </div>
    </header>
  );
};

export default HeroArea;
