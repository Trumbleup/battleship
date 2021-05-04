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
            } else {
                missedShots.push(coord)
            }
        }
    }
    
    return { shipPlacements, placeShip, receiveAttack, missedShots }
}

export default Gameboard;