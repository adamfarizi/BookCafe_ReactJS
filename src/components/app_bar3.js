import React, { useState }  from "react";
import { Offcanvas, Form, Nav, Button } from "react-bootstrap";

import './css/font.css'
import './css/app_bar.css'
import icon from './asset/P-removebg-preview.png'
import icon2 from './asset/icon2.png'
import bg from './asset/bg.png'
import icon3 from './asset/coffee-cup.png'

function Appbar({ name, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Container_Appbar" >
      <div className="navbar">
        <img src={icon} className="icon" />
        <nav id="menuList">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="ebook">Ebooks</a></li>
            <li><a href="membership" className="content active" >Membership</a></li>
            <li>
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </li>
            <li>
              <Nav.Link onClick={handleShow}><img src={icon2} className="icon2" /></Nav.Link>
            </li>
          </ul>
        </nav>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} placement='end' className="appbar_backdrop">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={icon3} classname="icon3_appbar" width={50} /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="appbar_ul">
            <br/>
            <li><a href="account">Account</a></li>
            <br/>
            <li><a href="mybook">My Book</a></li>
            <br/>
            <li><a href="setting">Setting</a></li>
            <br/>
            <li><a href="aboutus">About Us</a></li>
          </ul>
          <Button variant="primary" type="submit" href="login" className="btn-appbar">Log Out</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
  
}


export default Appbar;