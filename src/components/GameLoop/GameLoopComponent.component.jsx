import React from 'react';
import { useState, useEffect } from 'react';
import GameLoop from '../../GameLoop';

const GameLoopComponent = () => {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [playerGameboard, setPlayerGameboard] = useState(null);
    const [computerGameboard, setComputerGameboard] = useState(null);

    const handlePlayers = (gameLoop) => {
        setPlayer1(gameLoop.player);
        setPlayer2(gameLoop.computerPlayer);
        setPlayerGameboard(gameLoop.playerGameboard);
        setComputerGameboard(gameLoop.setComputerGameboard);
    }

    useEffect(() => {
        const gameLoop = GameLoop();
        handlePlayers(gameLoop);
    })

    return 

}