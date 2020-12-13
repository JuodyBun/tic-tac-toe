import React from "react";
import NavBar from "./Components/Navbar";
import Game from "./Components/Game";
import Login from "./Components/Login";
import Endgame from "./Components/Endgame";
import "./App.css";

class App extends React.Component {
    state = {
        ties: 0,
        userName1: "Player1",
        userName2: "Player2",
        winner: "",
        player1: 0,
        player2: 0,
        showLogin: true,
        showEndgame: false,
    };

    
}