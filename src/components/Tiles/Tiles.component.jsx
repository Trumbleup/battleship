import Tile from '../Tile/Tile.component';
import './Tiles.css';

const Tiles = ({ refWidth, refHeight, shipPlacements, handleReceiveAttack, currentTurn, handleSetCurrentTurn, player, enemyPlayer, gameOver }) => {
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
                currentTurn={currentTurn}
                handleSetCurrentTurn={handleSetCurrentTurn}
                gameOver={gameOver}
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