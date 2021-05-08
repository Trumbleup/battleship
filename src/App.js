import { useEffect, useState } from 'react';
import GameboardDisplay from './components/GameboardDisplay';
import GameLoop from './GameLoop.js'
import './App.css';


function App() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const gameLoop = GameLoop();

  const handleDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight);
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
      <GameboardDisplay width={width} height={height}/>
      <GameboardDisplay width={width} height={height}/>
    </div>
  );
}

export default App;
