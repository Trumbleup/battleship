const Gameboard = (id) => {
    const gameboardId = id;
    const getId = () => gameboardId;
    const shipPlacements = {};
    const missedShots = [];
    const getMissedShots = () => missedShots;
    const placeShip = (shipObj, coords) => {
        shipPlacements[shipObj.name] = {
            ship: shipObj,
            coordinates: coords
        }
    }
    const receiveAttack = (coord) => {
        for (let placedShip in shipPlacements) {
            if (shipPlacements[placedShip].coordinates.includes(coord)) {
                shipPlacements[placedShip].ship.hit(coord);
                return
            }
        }
        missedShots.push(coord)
    }

    const reportAllSunk = () => {
        for (let placedShip in shipPlacements) {
            if (!shipPlacements[placedShip].ship.isSunk()) {
                return false
            }
        }
        return true
    }
    
    return { shipPlacements, placeShip, receiveAttack, getMissedShots, reportAllSunk, getId }
}

export default Gameboard;