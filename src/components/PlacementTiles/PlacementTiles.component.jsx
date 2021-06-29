import PlacementTile from '../PlacementTile/PlacementTile.component';
import './PlacementTiles.css';

const PlacementTiles = ({ refWidth, refHeight, handleHoveredTile }) => {
    const alphabetRange = "ABCDEFGHIJ".split('');
    const tilesArr = [];
    for (let x = 0; x < 10; x++) {
        let coordinateLetter = alphabetRange[x];
        for (let y = 1; y <= 10; y++) {
            let coordinate = coordinateLetter + y;
            tilesArr.push(
                <PlacementTile 
                refWidth={refWidth} 
                refHeight={refHeight} 
                key={coordinate} 
                coordinate={coordinate}
                handleHoveredTile={handleHoveredTile}
                />
            );
        }   
    }
    return (
        <div className="flex-row">
            {tilesArr.map(PlacementTile => PlacementTile)}
        </div>
    )
}

export default PlacementTiles