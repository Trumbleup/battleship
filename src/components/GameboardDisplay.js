import './GameboardDisplay.css';
import React, { useEffect, useState } from 'react';
import Tiles from './Tiles'



const GameboardDisplay = ({ width }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);

    const handleBoardDimensions = () => {
        setBoardWidth(width * (1/3));
        setBoardHeight(boardWidth);
    }

    useEffect(() => {
        handleBoardDimensions();
    })
    return (
        <div className="gameboard-wrap">
            <div style={{width: boardWidth, height: boardHeight}} className="gameboard black-border">
                <Tiles refWidth={boardWidth} refHeight={boardHeight} />
            </div>
        </div>
    )
}

export default GameboardDisplay