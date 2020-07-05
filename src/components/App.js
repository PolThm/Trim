import React from 'react';
import HeroArea from "./HeroArea";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import BlogPost from "./BlogPost";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <HeroArea/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <BlogPost/>
      <Footer/>

      <div className={"space"}/>
    </React.Fragment>
  );
};

export default App;
