import Tile from './Tile'
import './GameboardDisplay.css'




const Tiles = ({ refWidth, refHeight, shipPlacements, handleReceiveAttack, player, enemyPlayer, handleTurn }) => {
    const alphabetRange = "ABCDEFGHIJ".split('');
    const tilesArr = [];
    for (let x = 0; x < 10; x++) {
        let coordinateLetter = alphabetRange[x];
        for (let y = 1; y <= 10; y++) {
            let coordinate = coordinateLetter + y;
            tilesArr.push(
                <Tile 
                refWidth={refWidth} 
                refHeight={refHeight} 
                key={coordinate} 
                coordinate={coordinate} 
                shipPlacements={shipPlacements} 
                handleReceiveAttack={handleReceiveAttack}
                player={player}
                enemyPlayer={enemyPlayer}
                handleTurn={handleTurn}
                />
            );
        }   
    }
    return (
        <div className="flex-row">
            {tilesArr.map(Tile => Tile)}
        </div>
    )
}

export default Tiles