import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Login from "./Login";

function Signup({ setCurrentUser }) {
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <Button onClick={handleSubmit} variant="primary">
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
