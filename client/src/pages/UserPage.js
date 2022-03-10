import React, { useState } from "react";
import { Form, Button, Container, Table, Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function UserPage({ currentUser, setCurrentUser }) {
  // Conditional added to prevent error if state is not set

  const [firstName, setFirstName] = useState(
    `${currentUser ? currentUser.first_name : null}`
  );
  const [lastName, setLastName] = useState(
    `${currentUser ? currentUser.first_name : null}`
  );
  const [email, setEmail] = useState(
    `${currentUser ? currentUser.last_name : null}`
  );
  const [username, setUsername] = useState(
    `${currentUser ? currentUser.email : null}`
  );
  const [password] = useState(`${currentUser ? currentUser.password : null}`);
  const [passwordConfirmation] = useState(
    `${currentUser ? currentUser.password_confirmation : null}`
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
    }).then((r) => {
      localStorage.removeItem("user-data");
      setCurrentUser();
    });
  }
  console.log(firstName, lastName, email, username);
  return (
    <div>
      <Container className="body_of_form">
        {!currentUser ? (
          <Navigate to="/" />
        ) : (
          <div>
            <Container>
              <div className="profile-main-div">
                <div className="p-5  bg-light shadow-lg">
                  <br></br>
                  <h1 className="text-center p-3 mb-3">Account Profile </h1>
                  <div className="p-2 table-responsive">
                    <Table striped bordered hover variant="light">
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
                  </div>

                  <Col className="mx-auto border shadow mt-5 profile-edit-div">
                    <h3 className="text-center pt-3">EDIT YOU PROFILE</h3>
                    <hr className="w-75 mx-auto" />
                    <div className="p-4 text-center w-50 mx-auto">
                      {!edit ? (
                        <Button
                          className="mx-auto user-button"
                          onClick={() => setEdit(true)}
                        >
                          Edit Profile
                        </Button>
                      ) : (
                        <Button
                          className="mx-auto user-button"
                          onClick={() => setEdit(false)}
                        >
                          Cancle Edit
                        </Button>
                      )}

                      <Button
                        className="mx-auto user-button"
                        onClick={handleSubmit}
                        variant="outline-secondary"
                      >
                        Confirm Changes
                      </Button>

                      <hr />
                      <Button
                        className="mt-2"
                        onClick={handleDelete}
                        variant="outline-danger user-button"
                      >
                        Delete Profile
                      </Button>
                    </div>
                  </Col>
                </div>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default UserPage;
