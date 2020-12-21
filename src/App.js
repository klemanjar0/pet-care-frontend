import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

import Sign from './components/Sign.component';


import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Button, Form, FormControl, FormText, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login.component";
import PetSingle from "./components/PetSingle.component";
import PetList from "./components/PetList.component";
import {userService} from "./services/auth.service";
import Main from "./components/Main.component";
import Dashboard from "./components/Dashboard.component";
import Profile from "./components/Profile.component";


class App extends React.Component {

    state = {
        username: userService.getToken(),
        loginState: userService.loggedIn(),
        profileState: false
    }

    logout(){
        userService.logout();

    }

    render() {



        console.log(this.state.loginState);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Navbar bg="dark" variant="dark" sticky="top">
                            <Navbar.Brand as={Link} to="/welcome">Pet Care</Navbar.Brand>
                            <Nav className="mr-auto">
                                {this.state.loginState &&
                                <Nav.Link as={Link} to="/pets">My Pets</Nav.Link>
                                }
                                {this.state.loginState &&
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                }
                                {this.state.loginState &&
                                <Nav.Link as={Link} to="/share">Share</Nav.Link>
                                }
                            </Nav>

                            {this.state.loginState &&
                            <Button as={Link} to="/profile" variant="light" className="mr-sm-2">{this.state.username}</Button>
                            }


                            {!this.state.loginState &&
                            <Button as={Link} to="/signin" variant="outline-light" className="mr-sm-2">Sign in</Button>
                            }

                            { this.state.loginState &&
                            <Button as={Link} to="/" variant="outline-light" className="mr-sm-2" onClick={(e) => {e.preventDefault(); this.logout()}} refresh="true">Log Out</Button>
                            }

                            <Form inline>

                            </Form>

                        </Navbar>
                    </header>
                    <Route path="/signin/" component={Login}/>
                    <Route path="/signup/" component={Sign}/>
                    <Route path="/pets/" component={PetList}/>
                    <Route path="/welcome" component={Main}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                </div>

            </Router>
        );
    }
}
export default App

