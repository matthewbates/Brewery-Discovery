import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Login from "./Login";

function Signup({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_onfirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then(setCurrentUser);
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            value={username}
            placeholder="Username..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassWordConfirmation">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            value={passwordConfirmation}
            placeholder="Confirm Password..."
          ></Form.Control>
        </Form.Group>

        <Button onChange={handleSignup} variant="primary">
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
