import React from "react";
import "./BlogPost.css";
import {Col, Container, Row} from "react-bootstrap";
import Post from "./Post";
import imgPost1 from "../img/blog_post/img-post-1.jpg";
import imgPost2 from "../img/blog_post/img-post-2.jpg";
import imgPost3 from "../img/blog_post/img-post-3.jpg";

const BlogPost = () => {
  return (
    <Container className={"blog_post"}>
      <div className={"title"}>
        <h2>Latest news of trim</h2>
        <h5>All the Lorem Ipsum generators on the Internet tend to repeat <br/>
          predefined chunks as necessary making this the first</h5>
      </div>
      <div className={"posts"}>
        <Row>
          <Col sm={12} md={4}>
            <Post
              img={imgPost1}
              date={"14 May. 2019"}
              author={"David Kustiam"}
              nbLikes={"568"}
              nbComs={"284"}
              text={"Customizer making it super easy " +
              "most of the typical."}
            />
          </Col>
          <Col md={4} className={"toRemoveOnPhone"}>
            <Post
              img={imgPost2}
              date={"22 June. 2019"}
              author={"Gus Wiggins"}
              nbLikes={"687"}
              nbComs={"312"}
              text={"Customizer making it super easy " +
              "most of the typical."}
            />
          </Col>
          <Col md={4} className={"toRemoveOnPhone"}>
            <Post
              img={imgPost3}
              date={"5 July. 2019"}
              author={"Billy McNeil"}
              nbLikes={"247"}
              nbComs={"192"}
              text={"Customizer making it super easy " +
              "most of the typical."}
            />
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default BlogPost;
