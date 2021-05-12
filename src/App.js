import { useEffect, useState } from 'react';
import GameboardGrid from './components/GameboardGrid';
import GameLoop from './GameLoop.js'
import './App.css';


function App() {
  const [width, setWidth] = useState(null);
  
  const gameLoop = GameLoop();
  const player = gameLoop.player;
  const computerPlayer = gameLoop.computerPlayer;
  const playerGameboard = gameLoop.playerGameboard;
  const computerGameboard = gameLoop.computerGameboard;

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


  return (
    <div className="flex row full-height gradient">
      <GameboardGrid 
        width={width}
        player={player}
        gameboard={playerGameboard}
      />
      <GameboardGrid 
        width={width}
        player={computerPlayer}
        gameboard={computerGameboard} 
      />
    </div>
  );
}

export default App;
