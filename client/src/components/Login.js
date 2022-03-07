import React, { useState } from "react";
import { Form, Button, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function Login({ setCurrentUser, renderLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleLogin(e) {
    let login = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((r) => console.log(r));
  }

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
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            placeholder="User Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLogin} variant="primary" to="/login">
          Log In
        </Button>
      </Form>
      <div className="mt-2">
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </Container>
  );
}

export default Login;
