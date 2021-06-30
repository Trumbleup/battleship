import './GameboardGrid.css';
import React, { useEffect, useState } from 'react';
import Tiles from '../Tiles/Tiles.component'

const GameboardGrid = ({ width, player, enemyPlayer, gameboard, currentTurn, handleSetCurrentTurn, gameOver }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);
    const [coordinatesWithShips, setCoordinatesWithShips] = useState([]);

    const shipPlacements = gameboard.shipPlacements;

    const handleBoardDimensions = () => {
        setBoardWidth(width * (1/4));
        setBoardHeight(boardWidth);
    }

    const handleReceiveAttack = (coord) => {
        enemyPlayer.attack(player, gameboard, coord)
    }

    const handleComputerAttack = (attackingPlayer, defendingPlayer, defendingBoard, coord) => {
        enemyPlayer.attack(player, gameboard, coord)
    }

    useEffect(() => {
        handleBoardDimensions();
    })

    useEffect(() => {
        if (currentTurn === 'computer' && enemyPlayer.getPlayerId() === 'computer') {
            const handleComputerTurn = () => {
                const computerPlayer = enemyPlayer;
                const humanPlayer = player;
                const randomCoord = computerPlayer.getRandomCoordinate();
                handleComputerAttack(computerPlayer, humanPlayer, gameboard, randomCoord);
                handleSetCurrentTurn(humanPlayer);
            }
            setTimeout(() => {
                handleComputerTurn()
            }, 1000)   
        }
    }, [currentTurn])

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
                currentTurn={currentTurn}
                handleSetCurrentTurn={handleSetCurrentTurn}
                gameOver={gameOver}
                />
            </div>
        </div>
    )
}

export default GameboardGrid