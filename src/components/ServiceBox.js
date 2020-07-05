import React, {Component} from "react";
import "./serviceBox.css"
import servicesIcon from "../img/services/services-icon.png";
import {Image} from "react-bootstrap";

class ServiceBox extends Component {
  // state = {
  //   isHover: this.props.isHover
  // };


  serviceIsHover = () => {
    this.props.serviceIsHover(true);
  };

  serviceIsNotHover = () => {
    this.props.serviceIsHover(false);
  };

  render() {
    let isItHover = "serviceBox";

    if (this.props.isHover) {
      isItHover = "serviceBox boxInTheCenter"
    }

    return (
      <div onMouseEnter={() => this.serviceIsHover()} onMouseLeave={() => this.serviceIsNotHover()} className={isItHover} >
        <div className={"iconBox"} style={{backgroundColor: this.props.bgIcon}}>
          <Image src={servicesIcon} />
        </div>
        <h3>{this.props.title}</h3>
        <h6>Sometimes an appointed commission <br/>
          parmanent semi organization great <br/>
          machinery goverment.actual</h6>
      </div>
    )
  };
}



export default ServiceBox;
