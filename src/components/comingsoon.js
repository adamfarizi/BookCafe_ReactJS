import React from "react";
import { Container } from "react-bootstrap";
import sorry from './asset/sorry.svg';

import './css/font.css';
import './css/comingsoon.css';

const comingsoon = () => {
  return(
    <Container className="Container_Comingsoon">
      <img src={sorry} width={400} className="img_comingsoon"/>
      <h1 className="h1_comingsoon">Sorry this page is not available yet, wait for the next update.</h1>
      <br/>
      <center><a href="home" className="a_comingsoon">Back to Home Page</a></center>
    </Container>
  );
}

export default comingsoon;