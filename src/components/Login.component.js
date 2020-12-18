import React from "react";
import {Button, Card, Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
        this.login = this.login.bind(this);
    }
    componentWillMount() {

    }

    login(e) {
        e.preventDefault();
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <Card style={{ width: '18rem', margin: '0 auto', marginTop:'30px' }}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={(e) => this.login(e)}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                minLength={8}
                            />
                        </Form.Group>
                        <Button
                            block
                            disabled={!this.validateForm()}
                            type="submit"
                            variant="primary"
                        >
                            Login
                        </Button>


                        <Button
                            block
                            type="submit"
                            variant="primary"
                            as={Link} to="/signup/"
                        >
                            Create account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
    //{this.props.state.error && <div><br/>{JSON.stringify(this.props.state.errorMessage.message)}</div>}
}
export default Login
