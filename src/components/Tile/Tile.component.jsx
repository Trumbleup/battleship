import { useEffect, useState } from 'react';
import './Tile.css';

const Tile = ({ refWidth, refHeight, coordinate, shipPlacements, handleReceiveAttack, handleSetCurrentTurn, player, enemyPlayer }) => {
    const [isShot, setIsShot] = useState(false);
    const [hasShip, setHasShip] = useState(false);
    const [shipSunk, setShipSunk] = useState(false);

    const handleIsShot = () => {
        setIsShot(true);
    }

    const handleSetHasShip = () => {
        setHasShip(true);
    }

    const handleOnClick = () => {
        if (enemyPlayer.getTurn()) {
            handleIsShot();
            handleReceiveAttack(coordinate);
            handleSetCurrentTurn(player);
        } else {
            return null
        }
    }

    useEffect(() => {
        for (let ship in shipPlacements) {
            if (shipPlacements[ship].coordinates.includes(coordinate)) {
                handleSetHasShip()
            }
            if (shipPlacements[ship].coordinates.includes(coordinate) && shipPlacements[ship].ship.isSunk()) {
                setShipSunk(true)
            }
        }
    })
    return (
        <div 
        onClick={handleOnClick}
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className="black-border border-box tile"
        data-coordinate={coordinate}
        >
            {
                (isShot) ?
                <div 
                    style={{width: (1/20) * refWidth, height: (1/20) * refHeight, borderRadius: 50}}
                    className={`${hasShip ? "green" : "red"}`}
                >
                </div> 
                :
                null
            } 
            {
                (shipSunk) ? 
                <div className='sunk' style={{width: (1/10) * refWidth, height: 1}}></div>
                :
                null          
            } 
        </div>
    )
}

export default Tile