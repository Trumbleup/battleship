import { useEffect, useState } from 'react';
import './Tile.css';

const Tile = ({ refWidth, refHeight, coordinate, shipPlacements, handleReceiveAttack, player, enemyPlayer }) => {
    const [isShot, setIsShot] = useState(false);
    const [hasShip, setHasShip] = useState(false);

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
        } else {
            return null
        }
    }

    useEffect(() => {
        for (let ship in shipPlacements) {
            if (shipPlacements[ship].coordinates.includes(coordinate)) {
                handleSetHasShip()
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
            {(isShot) ?
            <div 
                style={{width: (1/20) * refWidth, height: (1/20) * refHeight, borderRadius: 50}}
                className={`${hasShip ? "green" : "red"}`}
            >
            </div> 
            :
            null
            }  
        </div>
    )
}

export default Tile