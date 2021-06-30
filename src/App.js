import { useEffect, useState } from 'react';
import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import StartingScreen from './components/StartingScreen/StartingScreen.component.jsx';
import GameScreen from './components/GameScreen/GameScreen.component.jsx';
import './App.css';


function App() {
  const [width, setWidth] = useState(null);
  const [player, setPlayer] = useState(() => Player(true, 'player'));
  const [computerPlayer, setComputerPlayer] = useState(() => Player(false, 'computer'));
  const [playerGameboard, setPlayerGameboard] = useState(() => Gameboard('Player'));
  const [computerGameboard, setComputerGameboard] = useState(() => Gameboard('Computer'));
  const [currentTurn, setCurrentTurn] = useState('player');
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

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

  const handleSetCurrentTurn = (currentPlayer) => {
    if (currentPlayer.getTurn() === true) {
      setCurrentTurn(currentPlayer.getPlayerId);
    }
  }

  const placeShipsOnBoard = (board, carrier, battleship, cruiser, submarine, destroyer) => {
    const ship1 = Ship(5, 'carrier');
    const ship2 = Ship(4, 'battleship');
    const ship3 = Ship(3, 'cruiser');
    const ship4 = Ship(3, 'submarine');
    const ship5 = Ship(2, 'destroyer');
    board.placeShip(ship1, carrier);
    board.placeShip(ship2, battleship);
    board.placeShip(ship3, cruiser);
    board.placeShip(ship4, submarine);
    board.placeShip(ship5, destroyer);
  }

  const handleResetGame = () => {
    setPlayer(() => Player(true, 'player'));
    setComputerPlayer(() => Player(false, 'computer'));
    setPlayerGameboard(() => Gameboard('Player'));
    setComputerGameboard(() => Gameboard('Computer'));
    setStartGame(false);
    setGameOver(false);
  }

  const handleStartGame = (playerBoard, computerBoard, carrierCoords, battleshipCoords, cruiserCoords, submarineCoords, destroyerCoords) => {
    placeShipsOnBoard(playerBoard, carrierCoords, battleshipCoords, cruiserCoords, submarineCoords, destroyerCoords);
    placeShipsOnBoard(computerBoard, carrierCoords, battleshipCoords, cruiserCoords, submarineCoords, destroyerCoords);
    setStartGame(true);
  }
  

  useEffect(() => {
    if (startGame) {
      if (playerGameboard.reportAllSunk()) {
        setGameOver(true);
        setWinner('Computer')
      } else if (computerGameboard.reportAllSunk()) {
        setGameOver(true);
        setWinner('Player')
      }
    }
  }, [startGame, currentTurn, playerGameboard, computerGameboard])

  return (
    <div className="app-container full-width full-height gradient">
      {
        (!startGame) ?
        <StartingScreen width={width} handleStartGame={handleStartGame} playerGameboard={playerGameboard} computerGameboard={computerGameboard}/>
        :
        <GameScreen
          width={width} 
          player={player} 
          computerPlayer={computerPlayer} 
          playerGameboard={playerGameboard} 
          computerGameboard={computerGameboard}
          handleSetCurrentTurn={handleSetCurrentTurn}
          handleResetGame={handleResetGame}
          currentTurn={currentTurn}
          gameOver={gameOver}
          winner={winner}
        />
      }
    </div>
  );
}

export default App;
