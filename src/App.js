import { useEffect, useState } from 'react';
import Gameboards from './components/Gameboards/Gameboards.component';
import GameLoop from './GameLoop.js'
import './App.css';


function App() {
  const [width, setWidth] = useState(null);
  const [startGame, setStartGame] = useState(false);
  const [player, setPlayer] = useState(null);
  const [computerPlayer, setComputerPlayer] = useState(null);
  const [playerGameboard, setPlayerGameboard] = useState(null);
  const [computerGameboard, setComputerGameboard] = useState(null);

  const handleDimensions = () => {
    setWidth(window.innerWidth)
  }

  const handleResize = () => {
    handleDimensions();
  }

  useEffect(() => {
    handleDimensions();
    window.addEventListener('resize', handleResize);
  })

  const handlePlayers = (gameLoop) => {
    setPlayer(gameLoop.player);
    setComputerPlayer(gameLoop.computerPlayer);
    setPlayerGameboard(gameLoop.playerGameboard);
    setComputerGameboard(gameLoop.computerGameboard);
  }

  const handleStartGame = () => {
    setStartGame(true);
  }

  useEffect(() => {
      if (!startGame) {
        handleStartGame();
      } else {
        const gameLoop = GameLoop();
        handlePlayers(gameLoop);
        console.log(startGame);
      }
  }, [startGame])

  useEffect(() => {
    console.log(player)
    console.log(computerPlayer)
    console.log(playerGameboard)
    console.log(computerGameboard)
  }, [player, computerPlayer, playerGameboard, computerGameboard])


  return (
    <div className="app-container full-width full-height gradient">
      <div className="turn-header absolute">Player Turn Placeholder</div>
        {
          (player) ?
            <Gameboards 
              width={width} 
              player={player} 
              computerPlayer={computerPlayer} 
              playerGameboard={playerGameboard} 
              computerGameboard={computerGameboard}
            />
            :
            null
        }
    </div>
  );
}

export default App;
