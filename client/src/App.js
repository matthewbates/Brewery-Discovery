import "./App.css";
import {useEffect, useState} from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Login from "./components/Login";

function App() {
const [currentUser, setCurrentUser] = useState("");
 
useEffect(()=> { 
  fetch("/me")
  .then(res => {
    if(res.ok){
      res.json().then(user => setCurrentUser(user))
    }
  })
},[currentUser])


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
                </div>
                {/* </Nav.Link> */}
              </Nav>
            </div>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser}/>} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
