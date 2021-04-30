const Ship = (shipName, tilesArr) => {
    const name = shipName;
    const length = tilesArr.length;
    const placementTiles = [...tilesArr];
    const hitTiles = [];
    const hit = (tile) => {
        hitTiles.push(tile)
    };
    const isSunk = () => {
        const sortedPlacementTiles = placementTiles.sort((a,b) => a-b);
        const sortedHitTiles = hitTiles.sort((a,b) => a-b);
        const compareTiles = (arr1, arr2) => {
            if (arr1.length !== arr2.length) {
                return false
            }
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false
            } 
            return true
        };

        return compareTiles(sortedPlacementTiles, sortedHitTiles);
    }

    return { name, hit, hitTiles, isSunk, placementTiles }
}

export default Ship;