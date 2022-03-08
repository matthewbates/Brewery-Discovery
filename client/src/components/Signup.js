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
      .then(setCurrentUser);
  }

  return (
    <Container>
      <Form>
        <br></br>
        <h2>Create An Account!</h2>
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
            placeholder="Email"
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
        <Form.Group>
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
      <div className="mt-2">
        Already have an acount? <Link to="/">Signin</Link>
      </div>
    </Container>
  );
}

export default Signup;
