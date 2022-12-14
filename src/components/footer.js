import React from "react";

import './css/footer.css';
import './css/font.css';
import styled from 'styled-components';
import bg from './asset/footer-bottom.png'

const footer = () => {
  return (
    <FooterContainer className="Container_Footer">
      <div className="footer-middle">
        <hr className="footer-hr" />
        <br />
        <img src={bg} className="footer_bg" />
        <div className="content_footer">
          <div className="footer1">
            <h4>Service</h4>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Features</li>
          </div>
          <div className="footer1">
            <h4>Categories</h4>
            <li>Romance</li>
            <li>Fantasy</li>
            <li>Horor</li>
            <li>Thriller</li>
          </div>
          <div className="footer1">
            <h4>Contact</h4>
            <li>bookcaffe@gmail.com</li>
            <li>+62 889 xxx xxx</li>
            <li>book.caffee</li>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            &copy;{new Date().getFullYear(2022)} - BoookCaffe.com
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default footer;

const FooterContainer = styled.footer`
.footer-midle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}
`;