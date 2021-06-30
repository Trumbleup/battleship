import React, { useState } from 'react';
import StartingHeader from '../StartingHeader/StartingHeader.component';
import PlacementBoard from '../PlacementBoard/PlacementBoard.component';
import './StartingScreen.css';

const StartingScreen = ({ width, handleStartGame, playerGameboard, computerGameboard }) => {
    const [currentShip, setCurrentShip] = useState('Carrier');

    const handleCurrentShip = (shipsSet) => {
        switch (shipsSet) {
            case 0:
                setCurrentShip('Carrier');
                break;
            case 1:
                setCurrentShip('Battleship');
                break;
            case 2:
                setCurrentShip('Cruiser');
                break;
            case 3:
                setCurrentShip('Submarine');
                break;
            case 4:
                setCurrentShip('Destroyer');
                break;
        }
    }

    return (
        <div className="starting-screen">
            <StartingHeader currentShip={currentShip}/>
            <PlacementBoard 
                width={width}
                handleCurrentShip={handleCurrentShip} 
                handleStartGame={handleStartGame} 
                playerGameboard={playerGameboard} 
                computerGameboard={computerGameboard} 
            />
        </div>
    )
}

export default StartingScreen;