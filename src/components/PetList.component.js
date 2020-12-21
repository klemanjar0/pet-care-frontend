import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button, Card, CardDeck, FormText} from "react-bootstrap"
import {userService} from "../services/auth.service";
import PetSingle from "./PetSingle.component";


class PetList extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        pets: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/pets/user/"+userService.getIdUser()+"/pet/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pets: result
                    });
                    console.log(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const { error, isLoaded, pets } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div>
                    <FormText as="h1" className="mt-lg-10 m-5 ml-4">My Pets</FormText>
                    <CardDeck className="mt-lg-2 ml-5 mr-5">
                        {pets.map(pet => (<PetSingle key={pet.idPet} pet={pet}/>))}
                    </CardDeck>

                    <Button className="mt-md-n5 mb-3 text-center fixed-bottom" variant="primary" size="lg" block onClick={this.handleEditClick}>New Pet</Button>

                </div>
            );
        }

    }

    handleEditClick = () => {

    }
    handleDeleteClick = () => {

    }
}

export default PetList
