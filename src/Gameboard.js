const Gameboard = () => {
    const shipPlacements = {};
    const placeShip = (ship) => {
        shipPlacements[ship.name] = ship;
    }

    return { shipPlacements, placeShip }
}

export default Gameboard;