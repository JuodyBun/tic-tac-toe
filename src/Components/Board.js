import React from "react";

class Board extends React.Component {
    generateTiles = () => {
        let allTiles = [];
        for (let i = 0; i < 9; i++) {
            allTiles.push("tile not-played");
        }
        return allTiles;
    };

    handleClick = (event) => {
        const { handleScore, endgame } = this.props;
        let tile = event.target;
        if (tile.classList.length === 2) {
            this.play(tile);
        }

        let allTiles = document.getElementsByClassName("not-played");
        if (allTiles.length < 1) {
            handleScore("ties");
            endgame(true);
            this.reset();
        }
    };

    play = (tile) => {
        const { player1, player2, turn, handleScore, endgame } = this.props;
        tile.classList.remove("not-played");
        if (player1) {
            tile.innerHTML = "X";
            turn("player1", false, "player2", true);
            if (this.diagonal("X") || this.row("X") || this.column("X")) {
                handleScore("player1");
                endgame(true);
                this.reset();
            }
        }
        if (player2) {
            tile.innerHTML = "O";
            turn("player2", false, "player1", true);
            if (this.diagonal("O") || this.row("O") || this.column("O")) {
                handleScore("player2");
                endgame(true);
                this.reset();
            }
        }
    };
    
    diagonal = (play) => {
        let left = [
            document.getElementById("tile0").innerHTML,
            document.getElementById("tile4").innerHTML,
            document.getElementById("tile8").innerHTML,
       ];
       let right = [
            document.getElementById("tile2").innerHTML,
            document.getElementById("tile4").innerHTML,
            document.getElementById("tile6").innerHTML,
       ];

       if (left[0] === play && left[1] === play && left [2] === play) {
           return true;
       }
       if (right[0] === play && right[1] === play && right[2] === play) {
           return true;
       }
       return false;
   };

   
}