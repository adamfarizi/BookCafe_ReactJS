import React from "react";
import { Container } from "react-bootstrap";

import './css/content2.css';
import './css/font.css';
import bg from './asset/bg2.png'
import book from './asset/book3.png'

const content2 = () => {
  return(
    <Container className="Container_Content2">
      <img src={bg} classname="bg_content2" width={1500} />
      <div className="text_content2">
        <h1 className="tittle_content2">"Master all books, but don't let books rule you. Read to live, not live to read."</h1>
        <h3 className="subtittle_content2">- Owen Meredith</h3>
      </div>
      <div className="img_content2">
        <img src={book} />
      </div>
    </Container>
  );
}

export default content2;