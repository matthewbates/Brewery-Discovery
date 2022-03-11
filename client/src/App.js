import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Brewery from "./pages/Brewery";
import MapContainer from "./components/MapContainer";
import UserPage from "./pages/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [brewery, setBrewery] = useState("");
  //>> Logout
  function handleLogout(e) {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser());
  }

  // currentUser added to local storage to persist on refresh

  useEffect(() => {
    const data = localStorage.getItem("user-data");
    if (data) {
      setCurrentUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(currentUser));
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container fluid className="mx-3">
            <Navbar.Brand as={Link} to="/home">
              <h3> Brewery Discovery</h3>
            </Navbar.Brand>
            <div className="d-flex justify-content-end align-items-center">
              <Nav className="me-auto">
                <Nav.Link className="mx-2" as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/map">
                  Map
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/reviews">
                  Mini-Fridge
                </Nav.Link>
                <Nav.Link as={Link} to="/userpage">
                  Profile
                </Nav.Link>
                <div>
                  {/* Ternary used for distplaying Login/Logout button */}
                  {!currentUser ? (
                    <Button
                      className="mx-2 nav-login-btn"
                      as={Link}
                      to="/"
                      variant="outline-light"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={handleLogout}
                      className="mx-2 nav-login-btn"
                      as={Link}
                      to="/"
                      variant="outline-light"
                    >
                      Log out
                    </Button>
                  )}
                </div>
              </Nav>
            </div>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route
            className={("inner", "outer")}
            path="/"
            element={
              <Login
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />

          <Route
            className={("inner", "outer")}
            path="/signup"
            element={
              <Signup
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />

          <Route
            path="/home"
            element={<Home currentUser={currentUser} setBrewery={setBrewery} />}
          />
          <Route
            path="/reviews"
            element={<Reviews currentUser={currentUser} />}
          />
          <Route
            path={`/breweries/${brewery}`}
            element={<Brewery brewery={brewery} currentUser={currentUser} />}
          />
          <Route path="/map" element={<MapContainer />} />
          <Route
            path="/userpage"
            element={
              <UserPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
