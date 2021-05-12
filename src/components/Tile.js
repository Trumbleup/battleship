import { useEffect, useState } from 'react'
import './GameboardDisplay.css'

const Tile = ({ refWidth, refHeight, coordinate, shipPlacements }) => {
    const [isShot, setIsShot] = useState(false);
    const [hasShip, setHasShip] = useState(false);

    const handleIsShot = () => {
        setIsShot(true)
    }

    const handleSetHasShip = () => {
        setHasShip(true);
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
        onClick={handleIsShot}
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className="black-border border-box flex"
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