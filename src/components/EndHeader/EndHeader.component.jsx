import React from 'react';

const EndHeader = ({ winner, handleResetGame }) => (
    <div>
        <div>{winner} Wins!</div>
        <button onClick={handleResetGame}>Reset Game</button>
    </div>
)

export default EndHeader;