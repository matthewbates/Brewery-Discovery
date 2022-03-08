import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link} from "react-router-dom";

function Login({ setCurrentUser, renderLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


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



  return (
    <div className="body_of_form">
      <Container>
        <Form className={("outer", "inner")}>
          <br></br>
          <h2>Welcome Back!</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>User Name</Form.Label> */}
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="User Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
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
        <br></br>
        <div className="dont_have_account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;
