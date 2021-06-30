import React from 'react';
import './StartingHeader.css';

const StartingHeader = ({ currentShip }) => (
    <div className='starting-header'>PLACE YOUR {currentShip.toUpperCase()}</div>
)

export default StartingHeader;