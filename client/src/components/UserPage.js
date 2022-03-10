import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function UserPage({ currentUser, setCurrentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [attToChange, setAttToChange] = useState("");
  


  function handleSubmit(e) {

    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.email) {
          setCurrentUser(r);
        } else {
          alert(r.errors);
          setCurrentUser();
        }
      });
  }

  function handleDelete(e) {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    }).then(setCurrentUser());
  }
  
  console.log(currentUser);
  return (
    <div>
      {!currentUser ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Container>
            <div className="pt-5">
              <Form className={("outer", "inner")}>
                <br></br>
                <h2>Edit Account</h2>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    id="first_name"
                    value= {firstName? firstName : currentUser.first_name}
                    placeholder={currentUser.first_name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    id="last_name"
                    value={lastName}
                    placeholder={currentUser.last_name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="email"
                    value={email}
                    placeholder={currentUser.email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    id="username"
                    value={username}
                    placeholder={currentUser.username}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="mb-3">Password:</Form.Label>
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
                  Submit Edit
                </Button>
                <Button onClick={handleDelete} variant="danger">
                  Delete Acc
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      )}
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
    </div>
  );
}

export default UserPage;
