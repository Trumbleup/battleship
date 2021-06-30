import React from 'react';
import PlacementBoard from '../PlacementBoard/PlacementBoard.component';

const StartingScreen = ({ width, handleStartGame, playerGameboard, computerGameboard }) => (
    <PlacementBoard width={width} handleStartGame={handleStartGame} playerGameboard={playerGameboard} computerGameboard={computerGameboard} />
)

export default StartingScreen;