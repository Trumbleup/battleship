import React from 'react';
import EndHeader from '../EndHeader/EndHeader.component';
import Gameboards from '../Gameboards/Gameboards.component';
import './GameScreen.css';

const GameScreen =
     ({ width, player, computerPlayer, playerGameboard, computerGameboard, handleSetCurrentTurn, handleResetGame, winner, gameOver, currentTurn }) => (
    <div className='gamescreen'>
    {
        (!gameOver) ?
        <div className="gamescreen-header">{currentTurn.toUpperCase()}'S TURN!</div>
        :
        <EndHeader winner={winner} handleResetGame={handleResetGame}/>
    }
        <Gameboards 
            width={width} 
            player={player} 
            computerPlayer={computerPlayer} 
            playerGameboard={playerGameboard} 
            computerGameboard={computerGameboard}
            currentTurn={currentTurn}
            handleSetCurrentTurn={handleSetCurrentTurn}
            gameOver={gameOver}
        />
    </div>
)

export default GameScreen;