import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

import User from './components/User.component';
import Sign from './components/Sign.component';

import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Button, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login.component";



function App() {


  return (
      <Router>
    <div className="App">
      <header className="App-header">
          <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand as={Link} to="/">Pet Care</Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/pets">My Pets</Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={Link} to="/share">Share</Nav.Link>
              </Nav>

              <Button as={Link} to="/signin" variant="outline-light" className="mr-sm-2">Sign in</Button>

              <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
              </Form>

          </Navbar>
      </header>
        <Route path="/signin/" component={Login} />
        <Route path="/signup/" component={Sign} />
    </div>
      </Router>
  );
}

export default App;
