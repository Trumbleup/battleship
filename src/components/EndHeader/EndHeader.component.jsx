import React from 'react';
import './EndHeader.css';

const EndHeader = ({ winner, handleResetGame }) => (
    <div className="end-header">
        <div>{winner} Wins!</div>
        <button onClick={handleResetGame}>Reset Game</button>
    </div>
)

export default EndHeader;