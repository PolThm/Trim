import React from "react";
import "./Services.css";
import {Col, Container, Row} from "react-bootstrap";
import ServiceBox from "./ServiceBox";

class Services extends React.Component {
  state = {
    hasBeenHovered: false
  };

  hasBeenHovered = (value) => {
    this.setState({
      hasBeenHovered: value
    });
  };

  render() {
    let serviceClass = "serviceBox boxInTheCenter";

    if (this.state.hasBeenHovered) {
      serviceClass = "serviceBox "
    }

    return (
      <Container className={"services"}>
        <div className={"title"}>
          <h2>What we do?</h2>
          <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
            predefined chunks as necessary making this the first</h5>
        </div>
        <div className={"services"}>
          <Row>
            <Col xs={4}>
              <ServiceBox bgIcon={"#faa889"} title={"Online Marketing"} hasBeenHovered={this.hasBeenHovered} class={"serviceBox"}/>
            </Col>
            <Col xs={4}>
              <ServiceBox bgIcon={"#8bc2e4"} title={"Web Development"} hasBeenHovered={this.hasBeenHovered} class={serviceClass}/>
            </Col>
            <Col xs={4}>
              <ServiceBox bgIcon={"#c89bc8"} title={"UI/UX Design"} hasBeenHovered={this.hasBeenHovered} class={"serviceBox"}/>
            </Col>
          </Row>
        </div>
      </Container>
    )
  };
}

export default Services;
