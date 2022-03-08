import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup({ setCurrentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(console.log);
  }

  return (
    <div className="body_of_form">
      <Container>
        <Form className={("outer", "inner")}>
          <br></br>
          <h2>Register Account</h2>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="first_name"
              value={firstName}
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="last_name"
              value={lastName}
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              value={email}
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              value={username}
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPasswordConfirmation"
          >
            <Form.Control
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              id="password"
              value={passwordConfirmation}
              placeholder="Confirm Password"
            />
          </Form.Group>
          <br></br>
          <Button onClick={handleSubmit} variant="primary">
            Create Account
          </Button>
        </Form>
        <br></br>
        <div className="already_have_account">
          Already registered? <Link to="/">Log In</Link>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
