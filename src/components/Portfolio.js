import React from "react";
import "./Portfolio.css";
import {Col, Container, Image, Row} from "react-bootstrap";
import portfolioCard1 from "../img/portfolio/cards/portfolio-card-1.png";
import portfolioCard2 from "../img/portfolio/cards/portfolio-card-2.png";
import portfolioCard3 from "../img/portfolio/cards/portfolio-card-3.png";


class Portfolio extends React.Component {
  state = {
    card1: "on",
    card2: null,
    card3: null
  };

  timer;

  componentDidMount() {
    this.nextCard();
  }

  nextCard = () => {
    this.timer = setTimeout(() => {
      if (this.state.card1 === "on") {
        this.setState({
          card1: null,
          card2: "on",
          card3: null,
        })
      }
      else if (this.state.card2 === "on") {
        this.setState({
          card1: null,
          card2: null,
          card3: "on",
        })
      }
      else if (this.state.card3 === "on") {
        this.setState({
          card1: "on",
          card2: null,
          card3: null,
        })
      }
      this.nextCard();
    }, 3000)
  };

  card1On = () => {
    this.setState({
      card1: "on",
      card2: null,
      card3: null,
    });
    clearTimeout(this.timer);
  };

  card2On = () => {
    this.setState({
      card1: null,
      card2: "on",
      card3: null,
    });
    clearTimeout(this.timer);
  };

  card3On = () => {
    this.setState({
      card1: null,
      card2: null,
      card3: "on",
    });
    clearTimeout(this.timer);
  };

  render() {
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
              <Col md={4} className={"colSides"}>
                <Image className={`card ${this.state.card1}`} src={portfolioCard1}/>
                <Image className={"card mirror left"} src={portfolioCard3}/>
              </Col>
              <Col xs={12} md={4} className={"colCenter"}>
                <Image className={`card ${this.state.card2}`} src={portfolioCard2}/>
                <div className={"slider"}>
                  <div className={`slider-dot ${this.state.card1}`} onClick={() => this.card1On()}/>
                  <div className={`slider-dot ${this.state.card2}`} onClick={() => this.card2On()}/>
                  <div className={`slider-dot ${this.state.card3}`} onClick={() => this.card3On()}/>
                </div>
              </Col>
              <Col md={4} className={"colSides"}>
                <Image className={`card ${this.state.card3}`} src={portfolioCard3}/>
                <Image className={"card mirror right"} src={portfolioCard1}/>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default Portfolio;
