import GameboardGrid from '../GameboardGrid/GameboardGrid.component';
import './Gameboards.css';

const Gameboards = ({ width, player, computerPlayer, playerGameboard, computerGameboard, handleSetCurrentTurn }) => (
    <div className='gameboards'>
        <GameboardGrid
            width={width}
            player={player}
            enemyPlayer={computerPlayer}
            gameboard={playerGameboard}
            handleSetCurrentTurn={handleSetCurrentTurn}
        />
        <GameboardGrid 
            width={width}
            player={computerPlayer}
            enemyPlayer={player}
            gameboard={computerGameboard}
            handleSetCurrentTurn={handleSetCurrentTurn} 
        />
    </div>
)

export default Gameboards