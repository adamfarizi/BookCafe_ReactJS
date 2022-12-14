import React from "react";
import { Button, Container } from "react-bootstrap";

import './css/font.css';
import './css/content4.css';
import book from './asset/book_content4.jpeg';
import rate from './asset/frame7.png';
import bg1 from './asset/abstract1.png';
import bg2 from './asset/flower.png';

const content4 = () => {
  return(
    <Container className="Container_Content4">
      <div className="div_content4">
        <div className="div2_content4">
          <img src={book} className="book_content4" />
          <Button variant="primary" type="submit" href="mybook" className="btn-content4">Read Now</Button>
        </div>
        <div className="div3_content4">
          <h1 className="tittle_content4">Olu Canlar : Nikolay V. Gogol</h1>
          <h3 className="subtittle_content4">Irmail G</h3>
          <div className="div4_content4">
            <h5 className="tittle2_content4">About this book</h5>
            <ul className="subtittle2_content4">
              <li>Title     : Olu Canlar Nikolay V. Gogol</li>
              <li>Author    : Irmail G</li>
              <li>Imprint   : Gamedia Book</li>
              <li>Language  : English</li>
              <li>Number of Pages : 135</li>
              <li>Rate : <img src={rate} width={80} /></li>
            </ul>
          </div>
          <div className="div5_content4">
            <h5 className="tittle3_content4">Synopsis</h5>
            <p className="sinopsis_content4">Cerchio Del Gaia becomes increasingly entangled in both Dunai’s 
            life and the investigation, and she is told that if she joins the group she will have access to 
            information about her birth. The National Intelligence Agency is on a similar tack; if Dunai infiltrates 
            Cerchio Del Gaia, which they believe is an international terrorist organisation, they will provide her 
            with information about her origins. Dunai turns down both offers and the mystery of her birth and abandonment 
            is eventually revealed by a woman claiming to be Siobhan’s sister, Dunai’s birth mother and the head 
            of the South African chapter of Cerchio Del Gaia.Throughout the investigation Dunai has searched 
            for Mr Bojangles, a schizophrenic vagrant who may have seen the murderer. When she eventually finds 
            him he seems to be of little help, yet it is his ramblings along with another clue that leads to her 
            close friend and colleague, Bryan, who has been wanted by the FBI for twenty years for terrorist activities 
            in the US. Bryan murdered Siobhan after discovering she intended betraying him to the National 
            Intelligence Agency to deflect attention from Cerchio Del Gaia and as proof that she abided by the 
            law even when it meant personal sacrifice.</p>
          </div>
        </div>
      </div>
      <div className="divbg_content4">
        <img src={bg2} className="bg_content4" />
        <img src={bg1} className="bg2_content4" />
      </div>
    </Container>
  );
}

export default content4;