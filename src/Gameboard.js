const Gameboard = () => {
    const shipPlacements = {};
    const placeShip = (ship) => {
        shipPlacements[ship.name] = ship.placementTiles;
    }

    return { shipPlacements, placeShip }
}

export default Gameboard;