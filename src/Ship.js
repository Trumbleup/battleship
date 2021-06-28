const Ship = (shipLength, name) => {
    const length = shipLength;
    const hitTiles = [];
    const getHitTiles = () => hitTiles;
    const hit = (tile) => {
        hitTiles.push(tile);
    };
    const isSunk = () => {
        if (hitTiles.length === length) {
            return true
        } else {
            return false
        }
    }

    return { hit, getHitTiles, hitTiles, isSunk, length, name }
}

export default Ship;