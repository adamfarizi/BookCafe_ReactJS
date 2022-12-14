import React from "react";
import {Button, Card,Container, Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import './css/content.css';
import './css/font.css';
import product_img from './asset/book_catalog.png'
import line from './asset/line5.png'


const Content = () => {

  const navigate = useNavigate();

  return(
    <Container className="Container_Content">
      <center><h1 className="tittle_content">POPULAR BOOKS</h1></center>
      <div className="catalog">
        <Row xs={2} md={6} className="catalog_row">
          {Array.from({ length: 8}).map((_, idx) => (
            <Card className="card_content" onClick={() => navigate("/book")}>
              <Card.Img variant="top" src={product_img} height={150} width={150} className="card_content_img" />
                <Card.Body>
                  <Card.Subtitle className="card_content_tittle">Olu Canlar : Nikolay V. Gogol</Card.Subtitle>
                  <Card.Text className="card_content_subtittle">By :  </Card.Text>
                </Card.Body>
            </Card>
            
          ))}
        </Row>
        <center><Button variant="primary" type="submit" href="ebook" className="btn-content">View All</Button></center>
      </div>
      <div>
        <img src={line} className="line1-content" />
        <img src={line} className="line2-content" />
      </div>
    </Container>
  );
}

export default Content;