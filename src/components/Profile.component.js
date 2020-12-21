import {Badge, Button, Card, CardDeck, FormLabel, FormText} from "react-bootstrap";
import React from "react";
import {userContainer} from "../containers/User.container";
import {userService} from "../services/auth.service";
import PetSingle from "./PetSingle.component";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            pets: []
        };
    }

    state = {
        user: {},
        pets: [],
        isAdmin : true
    };

    componentDidMount() {
        userContainer.getUserByLogin(userService.getToken()).then(res => {
            this.setState({
                user: res
            })
        });

        fetch("http://localhost:3001/pets/user/"+userService.getIdUser()+"/pet/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        pets: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }


    render() {

        return(
            <div>
                <Card className="text-center">
                    <Card.Header>{this.state.user.login} {!this.state.isAdmin && <Badge variant="secondary">Admin</Badge>} </Card.Header>
                    <Card.Body>
                        <Card.Title>Profile Name: {this.state.user.name}</Card.Title>
                        <Card.Text>
                            Info:<br/>
                            {this.state.user.body}
                        </Card.Text>
                        <Button className="ml-2 mr-2" variant="secondary">Change Profile</Button>
                        <Button className="ml-2 mr-2" variant="secondary">Change password</Button>
                        <Button className="ml-2 mr-2" variant="outline-danger">Delete Profile</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Last changes {this.state.user.updatedAt}</Card.Footer>
                </Card>

                <FormLabel as="h1" className="ml-2 mr-2 mt-lg-5 text-center text-justify mb-5">{this.state.user.login}'s Pets</FormLabel>

                <CardDeck className="mt-lg-2 ml-5 mr-5">
                    {this.state.pets.map(pet => (<PetSingle key={pet.idPet} pet={pet}/>))}
                </CardDeck>
            </div>
        );
    }
}
export default Profile;
