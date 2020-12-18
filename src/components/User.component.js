import React from "react";
import {Button} from "react-bootstrap"


class User extends React.Component{
    state = {
        isOpen: true
    }

    render(){
        const {user} = this.props;
        const body = this.state.isOpen && <section> { user.text } </section>

        return(
            <div>
                <h2>
                    {user.name}
                    <button variant="primary" onClick={this.handleClick}>{this.state.isOpen ? "Hide" : "Show"}</button>
                </h2>
                {body}
                <h3>Creation date: {new Date(Date.now()).toDateString()}</h3>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
}

export default User
