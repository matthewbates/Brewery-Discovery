import "./App.css";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function userDisplay() {}

    function renderLogin() {
      if (currentUser !== null) {
        return (
          <>
            <p className="loginmsg">Welcome, {currentUser.username}!</p>
            {/* <button onClick={handleLogout} className="logoutbtn button">
              Logout
            </button> */}
          </>
        );
      } else {
        return <Login user={currentUser} onLogin={setCurrentUser} />;
      }
    }
<<<<<<< HEAD

=======
  })
},[])
>>>>>>> 4543c6ef2cb5d3ce88f8e8ae76e7ed4f339134bc

  function handleLogout(e) {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => console.log(res));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Brewery Discovery
            </Navbar.Brand>
            <div className="d-flex justify-content-end align-items-center">
              <Nav className="me-auto">
                <Nav.Link className="mx-2" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/reviews">
                  Reviews
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/login"> */}
                <div>
                  <Button
                    className="mx-2 nav-login-btn"
                    as={Link}
                    to="/login"
                    variant="outline-light"
                  >
                    Login
                  </Button>
                  <Button
<<<<<<< HEAD
                    className="mx-2 nav-signup-btn"
                    as={Link}
                    to="/signup"
                    variant="outline-light"
                  >
                    Create Account
                  </Button>
=======
                    onClick={handleLogout}
                    className="mx-2 nav-login-btn"
                    as={Link}
                    to="/login"
                    variant="outline-light"
                  >Log out</Button>
>>>>>>> 4543c6ef2cb5d3ce88f8e8ae76e7ed4f339134bc
                </div>
                {/* </Nav.Link> */}
              </Nav>
            </div>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route
              path="/login"
<<<<<<< HEAD
              element={<Login setCurrentUser={setCurrentUser} renderLogin={renderLogin} />}
            />
            <Route
              path="/signup"
              element={<Signup setCurrentUser={setCurrentUser} />}
=======
              element={<Login setCurrentUser={setCurrentUser} />}
>>>>>>> 4543c6ef2cb5d3ce88f8e8ae76e7ed4f339134bc
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
