import React from "react";
import "./Services.css";
import {Col, Container, Row} from "react-bootstrap";
import ServiceBox from "./ServiceBox";

class Services extends React.Component {
  state = {
    serviceIsHover: null
  };

  // componentDidMount() {
  //   console.log(this.state.serviceIsHover)
  // }
  //
  // componentDidUpdate() {
  //   console.log(this.state.serviceIsHover)
  // }

  serviceIsHover = (value) => {
    this.setState({
      serviceIsHover: value
    });
  };

  render() {
    return (
      <Container>
        <div className={"title"}>
          <h2>What we do?</h2>
          <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
            predefined chunks as necessary making this the first</h5>
        </div>
        <div className={"services"}>
          <Row>
            <Col xs={4}>
              <ServiceBox bgIcon={"#faa889"} title={"Online Marketing"} isHover={false} serviceIsHover={this.serviceIsHover} hover={this.state.serviceIsHover} class={"serviceBox"}/>
            </Col>
            <Col xs={4}>
              <ServiceBox bgIcon={"#8bc2e4"} title={"Web Development"} isHover={true} serviceIsHover={this.serviceIsHover} hover={this.state.serviceIsHover} class={"serviceBox boxInTheCenter"}/>
            </Col>
            <Col xs={4}>
              <ServiceBox bgIcon={"#c89bc8"} title={"UI/UX Design"} isHover={false} serviceIsHover={this.serviceIsHover} hover={this.state.serviceIsHover} class={"serviceBox"}/>
            </Col>
          </Row>
        </div>
      </Container>
    )
  };
}



export default Services;
