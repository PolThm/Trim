import React from "react";
import "./Testimonial.css";
import Testimony from "./Testimony";
import {Container} from "react-bootstrap";
import profil1 from "../img/testimonial/profil-1.jpg";
import profil2 from "../img/testimonial/profil-2.jpg";
import profil3 from "../img/testimonial/profil-3.jpg";

class Testimonial extends React.Component {
  state = {
    testimony1: "testimony-on",
    testimony2: "testimony-off",
    testimony3: "testimony-off",
    sliderDot1: "slider-dot",
    sliderDot2: "slider-dot on",
    sliderDot3: "slider-dot",
  };

  nextTestimony = () => {
    setTimeout(() => {
      if (this.state.testimony1 === "testimony-on") {
        this.setState({
          testimony1: "testimony-off",
          testimony2: "testimony-on",
          testimony3: "testimony-off",
          sliderDot1: "slider-dot",
          sliderDot2: "slider-dot",
          sliderDot3: "slider-dot on",
        })
      }
      else if (this.state.testimony2 === "testimony-on") {
        this.setState({
          testimony1: "testimony-off",
          testimony2: "testimony-off",
          testimony3: "testimony-on",
          sliderDot1: "slider-dot on",
          sliderDot2: "slider-dot",
          sliderDot3: "slider-dot",
        })
      }
      else if (this.state.testimony3 === "testimony-on") {
        this.setState({
          testimony1: "testimony-on",
          testimony2: "testimony-off",
          testimony3: "testimony-off",
          sliderDot1: "slider-dot",
          sliderDot2: "slider-dot on",
          sliderDot3: "slider-dot",
        })
      }
      this.nextTestimony();
    }, 7000)
  };

  componentDidMount() {
    this.nextTestimony();
  }

  render() {
    return (
      <Container className={"testimonial"}>
        <div className={"title"}>
          <h2>What clients say?</h2>
          <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
            predefined chunks as necessary making this the first</h5>
        </div>
        <div className={"content"}>
          <div className={this.state.testimony1}>
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
          <div className={this.state.testimony2}>
            <Testimony
              picture={profil2}
              message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
              " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
              " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.“"}
              author={"Xiao Ping"}
              job={"Comunity Manager"}
            />
          </div>
          <div className={this.state.testimony3}>
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
            <div className={this.state.sliderDot1}/>
            <div className={this.state.sliderDot2}/>
            <div className={this.state.sliderDot3}/>
          </div>
        </div>
      </Container>
    )
  };
}

export default Testimonial;
