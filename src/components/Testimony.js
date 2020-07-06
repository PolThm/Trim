import React from "react";
import "./Testimony.css";

const Testimony = (props) => {
  return (
    <div>
      <p className={"message"}>{props.message}</p>
      <p className={"author"}>{props.author}</p>
      <p className={"job"}>{props.job}</p>
    </div>
  )
};

export default Testimony;
