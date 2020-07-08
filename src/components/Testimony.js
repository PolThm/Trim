import React from "react";
import "./Testimony.css";
import {Col, Image, Row} from "react-bootstrap";

const Testimony = (props) => {
  return (
    <Row className={"testimony"}>
      <Col xs={4}>
        <Image className={"profil-picture"} src={props.picture}/>
      </Col>
      <Col xs={8} className={"text"}>
        <p className={"message"}>{props.message}</p>
        <p className={"author"}>{props.author}</p>
        <p className={"job"}>{props.job}</p>
      </Col>
    </Row>
  )
};

export default Testimony;
