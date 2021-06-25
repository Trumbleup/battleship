import './GameboardGrid.css';
import React, { useEffect, useState } from 'react';
import Tiles from '../Tiles/Tiles'

const GameboardDisplay = ({ width, player, enemyPlayer, gameboard }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);

    const shipPlacements = gameboard.shipPlacements;

    const handleBoardDimensions = () => {
        setBoardWidth(width * (1/4));
        setBoardHeight(boardWidth);
    }

    const handleReceiveAttack = (coord) => {
        enemyPlayer.attack(player, gameboard, coord)
    }

    useEffect(() => {
        handleBoardDimensions();
    })

    return (
        <div>
            <div style={{width: boardWidth, height: boardHeight}} className="black-border purple">
                <Tiles 
                refWidth={boardWidth} 
                refHeight={boardHeight} 
                shipPlacements={shipPlacements} 
                handleReceiveAttack={handleReceiveAttack} 
                player={player} 
                enemyPlayer={enemyPlayer}
                />
            </div>
        </div>
    )
}

export default GameboardDisplay