import GameboardGrid from '../GameboardGrid/GameboardGrid';
import './Gameboards.css';

const Gameboards = ({ width, player, computerPlayer, playerGameboard, computerGameboard }) => (
    <div className='gameboards'>
        <GameboardGrid
            width={width}
            player={player}
            enemyPlayer={computerPlayer}
            gameboard={playerGameboard}
        />
        <GameboardGrid 
            width={width}
            player={computerPlayer}
            enemyPlayer={player}
            gameboard={computerGameboard} 
        />
    </div>
)

export default Gameboards