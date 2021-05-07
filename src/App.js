import GameboardDisplay from './components/GameboardDisplay';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

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
    <div className="flex full-height">
      <GameboardDisplay width={width} height={height}/>
    </div>
  );
}

export default App;
