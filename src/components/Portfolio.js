import React from "react";
import "./Portfolio.css";
import {Col, Container, Image, Row} from "react-bootstrap";
import portfolioCard1 from "../img/portfolio/cards/portfolio-card-1.png";
import portfolioCard2 from "../img/portfolio/cards/portfolio-card-2.png";
import portfolioCard3 from "../img/portfolio/cards/portfolio-card-3.png";
import ServiceBox from "./ServiceBox";


const Portfolio = () => {
  return (
    <div className={"portfolio"}>
      <Container>
        <div className={"title"}>
          <h2>What we build?</h2>
          <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
            predefined chunks as necessary making this the first</h5>
        </div>
        <div className={"cards"}>
          <Row>
            <Col xs={4}>
              <Image className={"card"} src={portfolioCard1} />
            </Col>
            <Col xs={4}>
              <Image className={"card on"} src={portfolioCard2} />
            </Col>
            <Col xs={4}>
              <Image className={"card"} src={portfolioCard3} />
            </Col>
          </Row>
        </div>
        <div className={"slider"}>
          <div className={"slider-dot"}/>
          <div className={"slider-dot on"}/>
          <div className={"slider-dot"}/>
        </div>
      </Container>
    </div>
  )
};

export default Portfolio;
