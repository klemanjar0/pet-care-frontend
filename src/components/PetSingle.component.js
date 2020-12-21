import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button, Card} from "react-bootstrap"
import {userService} from "../services/auth.service";

class PetSingle extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.pet.idPet);

        this.state = {
            petid: props.pet.idPet,
            petname: props.pet.name,
            birthday: props.pet.birthday == null ? new Date(2008, 12, 11, 11, 32, 54) : props.pet.birthday,
            height: props.pet.height,
            species: props.pet.species,
            updatedat: props.pet.updatedat == null ? new Date(2008, 12, 11, 11, 32, 54) : props.pet.updatedat
        };
    }

    state = {
        petid: 0,
        petname: "Бублик",
        birthday: new Date(2008, 12, 11, 11, 32, 54),
        height: 0.35,
        species: "Мопс",
        updatedat: new Date()
    }


    render() {
        const {pet} = this.props;

        return (
            <Card className="text-center" style={{width: '22rem'}}>
                <Card.Header as="h3">{this.state.petname}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.species}</Card.Subtitle>
                    <Card.Text>
                        Birthday: {this.state.birthday}<br/>
                        Height: {this.state.height} cm
                    </Card.Text>
                    <Button variant="secondary" className="mr-sm-2" onClick={this.handleEditClick}>Edit</Button>
                    <Button variant="secondary" className="mr-sm-2" onClick={this.handleDeleteClick} refresh="true">Delete</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Last Edit: {this.state.updatedat.toDateString()}</Card.Footer>
            </Card>
        )
    }

    handleEditClick = () => {

    }
    handleDeleteClick = () => {
        console.log("http://localhost:3001/pets/delete/" + this.state.petid)

                    const response = fetch( "http://localhost:3001/pets/delete/"+this.state.petid, {
                        method: 'POST',
                        headers: {

                        },
                    })

                    if(response.ok){
                    }
                    else{
                    }

                    return response;
                }


}

export default PetSingle
