import React, { useState } from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function UserPage({ currentUser, setCurrentUser }) {
  // User data
  const [firstName, setFirstName] = useState(`${currentUser.first_name}`);
  const [lastName, setLastName] = useState(`${currentUser.last_name}`);
  const [email, setEmail] = useState(`${currentUser.email}`);
  const [username, setUsername] = useState(`${currentUser.username}`);
  const [password] = useState(`${currentUser.password}`);
  const [passwordConfirmation] = useState(
    `${currentUser.password_confirmation}`
  );

  // table data
  const [edit, setEdit] = useState(false);

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
                <h2> Profile </h2>
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
                      <td>
                        {edit ? (
                          <div>
                            <Form.Control
                              type="name"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setFirstName(e.target.value)}
                              Placeholder={currentUser.first_name}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.first_name.toUpperCase()}</div>
                        )}
                      </td>
                      <td>
                        {edit ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setLastName(e.target.value)}
                              Placeholder={currentUser.last_name}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.last_name.toUpperCase()}</div>
                        )}
                      </td>
                      <td>
                        {edit ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setEmail(e.target.value)}
                              Placeholder={currentUser.email}
                            />
                          </div>
                        ) : (
                          <div>{currentUser.email.toUpperCase()}</div>
                        )}
                      </td>
                      <td>
                        {edit ? (
                          <div>
                            <Form.Control
                              type="name"
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                              onChange={(e) => setUsername(e.target.value)}
                              Placeholder={currentUser.username}
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
                {!edit ? (
                  <Button onClick={() => setEdit(true)}>Edit Profile</Button>
                ) : (
                  <Button onClick={() => setEdit(false)}>Cancle Edit</Button>
                )}
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
    </div>
  );
}

export default UserPage;
