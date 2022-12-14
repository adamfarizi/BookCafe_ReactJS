import React from "react";
import { Pagination, Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import './css/content3.css';
import './css/font.css';
import product_img from './asset/book_catalog.png'


const Content3 = () =>{

  const navigate = useNavigate();

  return (
    <Container className="Container_Content3">
      <div className="ebook_content">
        <div className="ebook_categori">
          <ul className="ebook_ul">
            <li><h1 className="ebook_ul_tittle">Categories</h1></li>
            <li><a className="ebook_a_active">All</a></li>
            <li><a>Romance</a></li>
            <li><a>Fantasy</a></li>
            <li><a>Horor</a></li>
            <li><a>Thriller</a></li>
            <li><a>Other ...</a></li>
          </ul>
        </div>
        <div className="ebook_card">
          <h1 className="ebook_card_tittle">Catalog</h1>
          <Row xs={2} md={6} className="ebook_catalog_row">
            {Array.from({ length: 40 }).map((_, idx) => (
              <Card className="ebook_card_content" onClick={() => navigate("/book")}>
                <Card.Img variant="top" src={product_img} height={150} width={150} className="ebook_card_content_img" />
                <Card.Body>
                  <Card.Subtitle className="ebook_card_content_tittle">Olu Canlar : Nikolay V. Gogol</Card.Subtitle>
                  <Card.Text className="ebook_card_content_subtittle">By : Irmail G</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </div>
      </div>
      <Pagination className="ebook_pagination" style={{color:"#393E46"}}>
        <Pagination.Prev />
        <Pagination.Item className="ebook_pagination_active">{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}

export default Content3;