import React, { useState } from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function UserPage({ currentUser, setCurrentUser }) {
  // User data
  const [firstName, setFirstName] = useState(`${currentUser.first_name}`);
  const [lastName, setLastName] = useState(`${currentUser.last_name}`);
  const [email, setEmail] = useState(`${currentUser.email}`);
  const [username, setUsername] = useState(`${currentUser.username}`);
  const [password, setPassword] = useState(`${currentUser.password}`);
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    `${currentUser.password_confirmation}`
  );
  const [attToChange, setAttToChange] = useState("");

  // table data
  const [firstNameBool, setFirstNameBool] = useState(false);
  const [lastNameBool, setLastNameBool] = useState(false);
  const [emailBool, setEmailBool] = useState(false);
  const [usernameBool, setUsernameBool] = useState(false);

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
  console.log(firstName, lastName, email, username);
  return (
    <div>
      {!currentUser ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Container></Container>
          <Container>
            <div className="pt-5">
              <Form className={("outer", "inner")}>
                <br></br>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>User Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td onClick={() => setFirstNameBool(true)} >
                        {firstNameBool ? (
                          <div>
                            <Form.Control
                              type="name"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.first_name.toUpperCase()}</div>
                        )}
                      </td>
                      <td onClick={() => setLastNameBool(true)}>
                        {lastNameBool ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.last_name.toUpperCase()}</div>
                        )}
                      </td>
                      <td onClick={() => setEmailBool(true)}>
                        {emailBool ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.email.toUpperCase()}</div>
                        )}
                      </td>
                      <td onClick={() => setUsernameBool(true)}>
                        {usernameBool ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.username.toUpperCase()}</div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <br></br>
                <Button onClick={handleSubmit} variant="outline-secondary">
                  Confirm Changes
                </Button>
                <Button onClick={handleDelete} variant="outline-danger">
                  Delete Profile
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
