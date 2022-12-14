import React from "react";
import { Button, Container } from "react-bootstrap";

import './css/font.css'
import './css/header.css'
import img1 from './asset/book1.png'
import img2 from './asset/book2.png'

const header = () => {
  return (
    <Container className="Container_header">
      <h1 className="tittle_header">WHAT BOOK ARE YOU LOOKING FOR ?</h1>
      <h3 className="subtittle_header">Not Sure What To Read Next? Explore Our Catalog</h3>
      <Button variant="primary" type="submit" href="mybook" className="btn-explore">Explore Now</Button>
      <div className="header_img">
        <img src={img1} className="header_img1" />
        <img src={img2} className="header_img2" />
      </div>
    </Container>
  );
}

export default header;