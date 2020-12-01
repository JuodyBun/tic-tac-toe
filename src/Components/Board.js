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

    
}