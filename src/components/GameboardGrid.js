import './GameboardDisplay.css';
import React, { useEffect, useState } from 'react';
import Tiles from './Tiles'



const GameboardDisplay = ({ width, player, gameboard }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);

    const shipPlacements = gameboard.shipPlacements;

    const handleBoardDimensions = () => {
        setBoardWidth(width * (1/4));
        setBoardHeight(boardWidth);
    }

    useEffect(() => {
        handleBoardDimensions();
    })

    return (
        <div className="gameboard-wrap">
            <div style={{width: boardWidth, height: boardHeight}} className="black-border purple">
                <Tiles refWidth={boardWidth} refHeight={boardHeight} shipPlacements={shipPlacements}/>
            </div>
        </div>
    )
}

export default GameboardDisplay