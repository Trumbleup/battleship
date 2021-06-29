import React from 'react';
import EndHeader from '../EndHeader/EndHeader.component';
import Gameboards from '../Gameboards/Gameboards.component';

const GameScreen =
     ({ width, player, computerPlayer, playerGameboard, computerGameboard, handleSetCurrentTurn, handleResetGame, winner, gameOver, currentTurn }) => (
    <div>
    {
        (!gameOver) ?
        <div className="">{currentTurn}</div>
        :
        <EndHeader winner={winner} handleResetGame={handleResetGame}/>
    }
        <Gameboards 
            width={width} 
            player={player} 
            computerPlayer={computerPlayer} 
            playerGameboard={playerGameboard} 
            computerGameboard={computerGameboard}
            handleSetCurrentTurn={handleSetCurrentTurn}
            gameOver={gameOver}
        />
    </div>
)

export default GameScreen;