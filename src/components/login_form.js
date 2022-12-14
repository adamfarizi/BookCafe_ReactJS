import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import './css/font.css'
import './css/login_form.css'
import bg from './asset/bg.webp'
import icon from './asset/coffee-cup.png'

const login = () => {
  return (
    <Container className="Container-Login">
      <img src={bg} className="Background" />
      <Container className="Container-Form">
        <img src={icon} className="Icon" />
        <h1 className="Hello">Hello Again!</h1>
        <h5 className="Wellcome">Wellcome back you’ve been missed</h5>
        <Form>
          <Form.Group className="mb-3 fl1" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3 fl2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 fl3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" href="home" className="btn-login">Login</Button>
        </Form>
        <h5 className="signin">Don’t have any account ? </h5><a className="signin2" href="signin" >Sign in</a>
      </Container>
    </Container>
  );
}

export default login;