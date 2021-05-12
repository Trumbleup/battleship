import { useEffect, useState } from 'react'
import './GameboardDisplay.css'


const Tile = ({ refWidth, refHeight, coordinate, shipPlacements }) => {
    const [hasShip, setHasShip] = useState(false);

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
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className="black-border border-box flex"
        data-coordinate={coordinate}
        >
            <div 
                style={{width: (1/20) * refWidth, height: (1/20) * refHeight, borderRadius: 50}}
                className={`${hasShip ? "green" : "red"}`}
            >
            </div>    
        </div>
    )
}

const Tiles = ({ refWidth, refHeight, shipPlacements }) => {
    const alphabetRange = "ABCDEFGHIJ".split('');
    const tilesArr = [];
    for (let x = 0; x < 10; x++) {
        let coordinateLetter = alphabetRange[x];
        for (let y = 1; y <= 10; y++) {
            let coordinate = coordinateLetter + y;
            tilesArr.push(<Tile refWidth={refWidth} refHeight={refHeight} key={coordinate} coordinate={coordinate} shipPlacements={shipPlacements}/>);
        }   
    }
    return (
        <div className="flex-row">
            {tilesArr.map(Tile => Tile)}
        </div>
    )
}

export default Tiles