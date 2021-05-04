const Gameboard = () => {
    const shipPlacements = {};
    const missedShots = [];
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
    
    return { shipPlacements, placeShip, receiveAttack, missedShots, reportAllSunk }
}

export default Gameboard;