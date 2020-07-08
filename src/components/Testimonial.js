import React from "react";
import "./Testimonial.css";
import Testimony from "./Testimony";
import {Container} from "react-bootstrap";
import profil1 from "../img/testimonial/profil-1.jpg";
import profil2 from "../img/testimonial/profil-2.jpg";
import profil3 from "../img/testimonial/profil-3.jpg";

class Testimonial extends React.Component {
  state = {
    testimony1: "on",
    testimony2: null,
    testimony3: null,
  };

  timer;

  componentDidMount() {
    this.nextTestimony();
  }

  nextTestimony = () => {
    this.timer = setTimeout(() => {
      if (this.state.testimony1 === "on") {
        this.setState({
          testimony1: null,
          testimony2: "on",
          testimony3: null,
        })
      }
      else if (this.state.testimony2 === "on") {
        this.setState({
          testimony1: null,
          testimony2: null,
          testimony3: "on",
        })
      }
      else if (this.state.testimony3 === "on") {
        this.setState({
          testimony1: "on",
          testimony2: null,
          testimony3: null,
        })
      }
      this.nextTestimony();
    }, 7000)
  };

  testimony1On = () => {
    this.setState({
      testimony1: "on",
      testimony2: null,
      testimony3: null,
    });
    clearTimeout(this.timer);
  };

  testimony2On = () => {
    this.setState({
      testimony1: null,
      testimony2: "on",
      testimony3: null,
    });
    clearTimeout(this.timer);
  };

  testimony3On = () => {
    this.setState({
      testimony1: null,
      testimony2: null,
      testimony3: "on",
    });
    clearTimeout(this.timer);
  };

  render() {
    return (
      <Container className={"testimonial"}>
        <div className={"title"}>
          <h2>What clients say?</h2>
          <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
            predefined chunks as necessary making this the first</h5>
        </div>
        <div className={"content"}>
          <div className={`testi ${this.state.testimony1}`}>
            <Testimony
              picture={profil1}
              message={"“It is a long established fact that a reader will be distracted by the readable content" +
              "when looking at its layout. The point of using Lorem Ipsum that it has a distribution" +
              "of letters, as opposed to using 'Content here, content here', making it look readable" +
              "desktop publishing packages and web page editors.“"}
              author={"John Catalano"}
              job={"Marketing Lead"}
            />
          </div>
          <div className={`testi ${this.state.testimony2}`}>
            <Testimony
              picture={profil2}
              message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
              " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
              " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.“"}
              author={"Xiao Ping"}
              job={"Comunity Manager"}
            />
          </div>
          <div className={`testi ${this.state.testimony3}`}>
            <Testimony
              picture={profil3}
              message={"“Magna fringilla urna porttitor rhoncus dolor purus. Suspendisse ultrices gravida dictum" +
              " fusce ut placerat orci. Donec ac odio tempor orci dapibus ultrices. Blandit volutpat maecenas" +
              " volutpat blandit aliquam etiam erat velit. Vitae congue eu consequat ac felis donec et odio.“"}
              author={"Vanessa Banny"}
              job={"UX Designer"}
            />
          </div>
          <div className={"slider"}>
            <div className={`slider-dot ${this.state.testimony1}`} onClick={() => this.testimony1On()}/>
            <div className={`slider-dot ${this.state.testimony2}`} onClick={() => this.testimony2On()}/>
            <div className={`slider-dot ${this.state.testimony3}`} onClick={() => this.testimony3On()}/>
          </div>
        </div>
      </Container>
    )
  };
}

export default Testimonial;
