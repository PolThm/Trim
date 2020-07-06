import React from "react";
import "./Testimonial.css";
import Testimony from "./Testimony";
import {Col, Container, Image, Row} from "react-bootstrap";
import profil1 from "../img/testimonial/profil-1.jpg";


const Testimonial = () => {
  return (
    <Container>
      <div className={"title"}>
        <h2>What clients say?</h2>
        <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
          predefined chunks as necessary making this the first</h5>
      </div>
      <div className={"content"}>
        <Row>
          <Col xs={4}>
            <Image className={"profil-picture"} src={profil1} />
          </Col>
          <Col xs={8} className={"text"}>
            <Testimony
            message={"“It is a long established fact that a reader will be distracted by the readable content\n" +
            "        when looking at its layout. The point of using Lorem Ipsum that it has a distribution\n" +
            "        of letters, as opposed to using 'Content here, content here', making it look readable\n" +
            "        desktop publishing packages and web page editors"}
            author={"Karissa Catalano"}
            job={"Marketing Lead"}
            />
            <div className={"slider"}>
              <div className={"slider-dot"}/>
              <div className={"slider-dot on"}/>
              <div className={"slider-dot"}/>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default Testimonial;
