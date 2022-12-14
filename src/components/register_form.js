import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import './css/font.css'
import './css/register_form.css'
import bg from './asset/bg.webp'
import icon from './asset/coffee-cup.png'

const signin = () => {
  return (
    <Container className="Container-Signin">
      <img src={bg} className="Background" />
      <Container className="Container-Form">
        <img src={icon} className="Icon" />
        <h1 className="Create">Create an account</h1>
        <Form>
          <Form.Group className="mb-3 fs1" >
            <Form.Control type="text" placeholder="Name *" />
          </Form.Group>
          <Form.Group className="mb-3 fs2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email *" />
          </Form.Group>
          <Form.Group className="mb-3 fs3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password *" />
          </Form.Group>
          <Form.Group className="mb-3 fs4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="i agree with all privacy policy" />
          </Form.Group>
          <Button variant="primary" type="submit" href="home" className="btn-sign">Sign In</Button>
        </Form>
        <h5 className="login">Have an account ? </h5><a className="login2" href="login" >Log In</a>
      </Container>
    </Container>
  );
}

export default signin;