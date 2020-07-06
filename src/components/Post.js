import React from "react";
import "./Post.css";
import {Image} from "react-bootstrap";

const Post = (props) => {
  return (
    <div className={"post"}>
      <Image src={props.img} />
      <div className={"dateBox"}>
        <div className={"date"}>{props.date}</div>
      </div>
      <div className={"infos"}>
        <div className={"post_author"}>
          <i className="fas fa-user"/>
          {props.author}
        </div>
        <div className={"likes_coms"}>
          <div className={"likes"}>
            <i className="fas fa-heart"/>
            {props.nbLikes}
          </div>
          <div className={"coms"}>
            <i className="fas fa-comment"/>
            {props.nbComs}
          </div>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  )
};

export default Post;
