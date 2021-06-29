import './PlacementBoard.css';
import React, { useEffect, useState } from 'react';
import PlacementTiles from '../PlacementTiles/PlacementTiles.component';
import Ship from "../../Ship.js";

const PlacementBoard = ({ width }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);
    const [carrierCoords, setCarrierCoords] = useState([]);
    // const [battleShipCoords, setBattleShipCoords] = useState([]);
    // const [cruiserCoords, setCruiserCoords] = useState([]);
    // const [submarineCoords, setSubmarineCoords] = useState([]);
    // const [destroyerCoords, setDestroyerCoords] = useState([]);
    const [shipsPlaced, setShipsPlaced] = useState(0);
    const [hoveredTile, setHoveredTile] = useState(null);
    const [highlightedTiles, setHighlightedTiles] = useState([]);

    const handleBoardDimensions = () => {
        setBoardWidth(width * (1/4));
        setBoardHeight(boardWidth);
    }

    useEffect(() => {
        handleBoardDimensions();
    })

    const handleCarrierCoords = (array) => {
        setCarrierCoords(array)
    }

    // const handleBattleShipCoords = (array) => {
    //     setBattleShipCoords(array)
    // }

    // const handleCruiserCoords = (array) => {
    //     setCruiserCoords(array)
    // }
    
    // const handleSubmarineCoords = (array) => {
    //     setSubmarineCoords(array)
    // }

    // const handleDestroyerCoords = (array) => {
    //     setDestroyerCoords(array)
    // };

    // const handleSetShipsPlaced = () => {
    //     switch (shipsPlaced) {
    //         case 0:
    //     }
    // }

    const handleHoveredTile = (coord) => {
        setHoveredTile(coord);
    }

    const handleHighlightedTiles = (hoveredTile) => {
        const splitCoordinate = hoveredTile.match(/[a-z]+|[^a-z]+/gi); // Split Letter and Number
        const coordLetter = splitCoordinate[0];
        const coordNumber = Number(splitCoordinate[1]);
        console.log(coordLetter, coordNumber)

        switch (shipsPlaced) {
            case 0: // placing the carrier
                if ((coordNumber + 5) <= 10 ) {
                    let coordArray = [];
                    for (let i = 0; i < 5; i++) {
                        coordArray.push(coordLetter + (i + coordNumber));
                    }
                    console.log(coordArray);
                    // setHighlightedTiles(coordArray);
                }
                break;
            default:
                console.log('default route');
        }
    }

    useEffect(() => {
        if (hoveredTile) {
            handleHighlightedTiles(hoveredTile);
        }
    }, [hoveredTile])

    const placeShipsOnBoard = (board) => {
        const ship1 = Ship(5, 'carrier');
        const ship2 = Ship(4, 'battleship');
        const ship3 = Ship(3, 'cruiser');
        const ship4 = Ship(3, 'submarine');
        const ship5 = Ship(2, 'destroyer');
        board.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
        board.placeShip(ship2, ["B1", "B2", "B3", "B4"]);
        board.placeShip(ship3, ["D4", "E4", "F4"]);
        board.placeShip(ship4, ["G3", "G4", "G5"]);
        board.placeShip(ship5, ["I5", "I6"]);
    }

    return (
        <div style={{width: boardWidth, height: boardHeight}} className="black-border purple">
            <PlacementTiles 
            refWidth={boardWidth} 
            refHeight={boardHeight}
            handleHoveredTile={handleHoveredTile}
            />
        </div>
    )
}

export default PlacementBoard