import React from "react";
import "./Footer.css";
import {Container, Image, Row} from "react-bootstrap";
import logo from "../img/hero_area/header_top/logo.png";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <Container>
        <Row className={"content"}>
          <div className={"column"}>
            <Image className={"logo"} src={logo}/>
            <div className={"links"}>
              <div><a href="mailto:trimes@gmail.com">trimes@gmail.com</a></div>
              <div><a href="#">www.lambo.org</a></div>
              <div><a href="tel:+88967563846">+88 967 563 846</a></div>
            </div>
          </div>
          <div className={"column"}>
            <h4>Our Services</h4>
            <div className={"links"}>
              <div><a href="#">Keword Planning</a></div>
              <div><a href="#">Link Building</a></div>
              <div><a href="#">Website analysis</a></div>
              <div><a href="#">Content Optimization</a></div>
            </div>
          </div>
          <div className={"column"}>
            <h4>Conditation</h4>
            <div className={"links"}>
              <div><a href="#">Terms of services</a></div>
              <div><a href="#">Security Policy</a></div>
              <div><a href="#">Privacy Policy</a></div>
              <div><a href="#">News & Post</a></div>
            </div>
          </div>
          <div className={"column"}>
            <h4>Quick Links</h4>
            <div className={"links"}>
              <div><a href="#">How we work</a></div>
              <div><a href="#">About us</a></div>
              <div><a href="#">Contact us</a></div>
              <div><a href="#">Price & Planning</a></div>
            </div>
          </div>
        </Row>

        <div className={"bottom"}>
          <p><b>Copyright 2020</b> - Developed by <span><a href="http://pol-thomas.com/" target={"blank"}>Pol Thomas</a></span></p>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;
