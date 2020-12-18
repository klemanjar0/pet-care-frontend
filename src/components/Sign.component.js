import React from "react";
import {Button, Card, Form} from "react-bootstrap";

class Sign extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
        };
        this.register = this.register.bind(this);
    }
    componentWillMount() {

    }

    register(e) {
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
                    <Card.Title>Register</Card.Title>
                    <Form onSubmit={(e) => this.register(e)}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                value={this.state.email}
                                onChange={this.handleChange}
                                type="email"
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
                            Register
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        );
    }
    //{this.props.state.error && <div><br/>{JSON.stringify(this.props.state.errorMessage.message)}</div>}
}
export default Sign
