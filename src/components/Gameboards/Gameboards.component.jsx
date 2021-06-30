import GameboardGrid from '../GameboardGrid/GameboardGrid.component';
import './Gameboards.css';

const Gameboards = ({ width, player, computerPlayer, playerGameboard, computerGameboard, currentTurn, handleSetCurrentTurn, gameOver }) => (
    <div className='gameboards'>
        <GameboardGrid
            width={width}
            player={player}
            enemyPlayer={computerPlayer}
            gameboard={playerGameboard}
            currentTurn={currentTurn}
            handleSetCurrentTurn={handleSetCurrentTurn}
            gameOver={gameOver}
        />
        <GameboardGrid 
            width={width}
            player={computerPlayer}
            enemyPlayer={player}
            gameboard={computerGameboard}
            currentTurn={currentTurn}
            handleSetCurrentTurn={handleSetCurrentTurn}
            gameOver={gameOver} 
        />
    </div>
)

export default Gameboards