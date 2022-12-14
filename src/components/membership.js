import React from "react";
import { Button, Container } from "react-bootstrap";

import './css/font.css';
import './css/membership.css';
import book from './asset/Ebook-rafiki.svg'

const membership = () => {
  return(
    <Container className="Container_Membership">
      <img src={book} className="book_membership" />
      <div className="text_membership">
        <h1 className="tittle_membership">IDR 60,000 for 3 months Premium with e-wallet.</h1>
        <h3 className="subtittle_membership">Enjoy more books, no ads, and more. Cancel anytime.</h3>
        <div className="button_membership">
          <ul>
            <li><Button variant="primary" type="submit" href="membership" className="btn1-membership">Buy Premium</Button></li>
            <li><Button variant="primary" type="submit" href="membership" className="btn2-membership">See Package</Button></li>
          </ul>
        </div>
        <h3 className="subtittle2_membership">Individual packages only. IDR 60,000/month thereafter. Terms and conditions apply. Only open to users who have never tried Premium. Offer ends 31/12/22.</h3>
      </div>
    </Container>
  );
}

export default membership;