import React from "react";

class Login extends React.Component {
    state = {
        player1: "",
        player2: "",
    };

    handleChange = (event) => {
        console.log(event.target.value);

        let player = event.target.id;
        this.setState({ [player]: event.target.value });
    };

    handleClick = (event) => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        this.props.names(player1, player2);
    };
    render () {
        return (
            <div className="wrapper">
                <div className="screen">
                    <form>
                        <div className="form-group">
                            <label>&nbsp; Player 1 Name &nbsp;</label>
                            <input 
                                type="name"
                                id="player1"
                                placeholder="Player 1"
                                className="form-control"
                                onChange={this.handleChange}
                            />

                            <label>&nbsp; Player 2 Name &nbsp;</label>
                            <input 
                                type="name"
                                id="player2"
                                placeholder="Player 2"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <center><button onClick={this.handleClick} className="btn btn-primary">
                            Submit
                        </button></center>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;