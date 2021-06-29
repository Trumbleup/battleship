import './PlacementBoard.css';
import React, { useEffect, useState } from 'react';
import PlacementTiles from '../PlacementTiles/PlacementTiles.component';
import Ship from "../../Ship.js";

const PlacementBoard = ({ width }) => {
    const [boardWidth, setBoardWidth] = useState(null);
    const [boardHeight, setBoardHeight] = useState(null);
    const [carrierCoords, setCarrierCoords] = useState([]);
    const [battleShipCoords, setBattleShipCoords] = useState([]);
    const [cruiserCoords, setCruiserCoords] = useState([]);
    const [submarineCoords, setSubmarineCoords] = useState([]);
    const [destroyerCoords, setDestroyerCoords] = useState([]);
    const [takenCoords, setTakenCoords] = useState([]);
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

    const handleBattleShipCoords = (array) => {
        setBattleShipCoords(array)
    }

    const handleCruiserCoords = (array) => {
        setCruiserCoords(array)
    }
    
    const handleSubmarineCoords = (array) => {
        setSubmarineCoords(array)
    }

    const handleDestroyerCoords = (array) => {
        setDestroyerCoords(array)
    };

    const handleHoveredTile = (coord) => {
        setHoveredTile(coord);
    }

    const getCorrespondingTiles = (hoveredTile) => {
        const splitCoordinate = hoveredTile.match(/[a-z]+|[^a-z]+/gi); // Split Letter and Number
        const coordLetter = splitCoordinate[0];
        const coordNumber = Number(splitCoordinate[1]);
        const amountOfShipsPlaced = shipsPlaced;
        let lengthOfShip = 5 - amountOfShipsPlaced;
        if (amountOfShipsPlaced >= 3) { // to account for submarine and destroyer lengths
            lengthOfShip = lengthOfShip + 1;
        } 
        if (((coordNumber - 1) + lengthOfShip) <= 10 ) {
            let coordArray = [];
            for (let i = 0; i < lengthOfShip; i++) {
                coordArray.push(coordLetter + (i + coordNumber));
            }
            return coordArray
        }

        return null
    }

    const areCoordinatesAvailable = (correspondingCoords, takenCoords) => {
        if (correspondingCoords && takenCoords) {
            let hasNoMatches = true;
            correspondingCoords.forEach(correspondingCoord => {
                if (takenCoords.includes(correspondingCoord)) {
                    hasNoMatches = false;
                }
            })
            return hasNoMatches
        }
    }

    const handleHighlightedTiles = (hoveredTile) => {
        const correspondingTiles = getCorrespondingTiles(hoveredTile);
        if (takenCoords && correspondingTiles) {
            const coordsAvailable = areCoordinatesAvailable(correspondingTiles, takenCoords);
            if (coordsAvailable) {
                setHighlightedTiles(correspondingTiles);
                return
            }
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

    const handleSetShipsPlaced = () => {
        switch (shipsPlaced) {
            case 0:
                setShipsPlaced(1);
                break;
            case 1:
                setShipsPlaced(2);
                break;
            case 2:
                setShipsPlaced(3);
                break;
            case 3:
                setShipsPlaced(4);
                break;
            case 4:
                setShipsPlaced(5);
                break;
        }
    }

    const handleShipCoordinates = () => {
        const isAvailable = areCoordinatesAvailable(highlightedTiles, takenCoords);
        if (isAvailable) {
            switch (shipsPlaced) {
                case 0: 
                    handleCarrierCoords(highlightedTiles);
                    handleSetShipsPlaced();
                    break;
                case 1: 
                    handleBattleShipCoords(highlightedTiles);
                    handleSetShipsPlaced();
                    break;
                case 2: 
                    handleCruiserCoords(highlightedTiles);
                    handleSetShipsPlaced();
                    break;
                case 3: 
                    handleSubmarineCoords(highlightedTiles);
                    handleSetShipsPlaced();
                    break;
                case 4: 
                    handleDestroyerCoords(highlightedTiles);
                    handleSetShipsPlaced();
                    break;
            }
        }
    }

    const handleTakenCoordiantes = () => {
        let newArray = [];
        carrierCoords.forEach(coord => newArray.push(coord));
        battleShipCoords.forEach(coord => newArray.push(coord));
        cruiserCoords.forEach(coord => newArray.push(coord));
        submarineCoords.forEach(coord => newArray.push(coord));
        destroyerCoords.forEach(coord => newArray.push(coord));
        setTakenCoords(newArray);
    }

    useEffect(() => {
        handleTakenCoordiantes();
    }, [carrierCoords, battleShipCoords, cruiserCoords, submarineCoords, destroyerCoords])

    return (
        <div style={{width: boardWidth, height: boardHeight}} className="black-border purple">
            <PlacementTiles 
            refWidth={boardWidth} 
            refHeight={boardHeight}
            highlightedTiles={highlightedTiles}
            handleHoveredTile={handleHoveredTile}
            handleShipCoordinates={handleShipCoordinates}
            takenCoords={takenCoords}
            />
        </div>
    )
}

export default PlacementBoard