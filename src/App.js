import { useEffect, useState } from 'react';
import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import Gameboards from './components/Gameboards/Gameboards.component';
import EndHeader from './components/EndHeader/EndHeader.component';
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

  const placeShipsOnBoard = (board) => {
    const ship1 = Ship(5, 'carrier');
    const ship2 = Ship(4, 'battleship');
    const ship3 = Ship(3, 'cruiser');
    const ship4 = Ship(3, 'submarine');
    const ship5 = Ship(2, 'destroyer');
    board.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
    board.placeShip(ship2, ["B1", "B2", "B3", "B4"]);
    board.placeShip(ship3, ["D4", "E4", "F4"]);
    board.placeShip(ship4, ["G3", "G4", "G5"]);
    board.placeShip(ship5, ["I5", "I6"]);
  }

  const handleResetGame = () => {
    setPlayer(() => Player(true, 'player'));
    setComputerPlayer(() => Player(false, 'computer'));
    setPlayerGameboard(() => Gameboard('Player'));
    setComputerGameboard(() => Gameboard('Computer'));
    setStartGame(false);
    setGameOver(false);
    console.log('clicked');
  }

  useEffect(() => {
    if (!startGame) {
      placeShipsOnBoard(playerGameboard);
      placeShipsOnBoard(computerGameboard);
      setStartGame(true)
    }
  }, [startGame, playerGameboard, computerGameboard])
  

  useEffect(() => {
    if (playerGameboard.reportAllSunk()) {
      setGameOver(true);
      setWinner('Computer')
    } else if (computerGameboard.reportAllSunk()) {
      setGameOver(true);
      setWinner('Player')
    }
  }, [currentTurn, playerGameboard, computerGameboard])

  return (
    <div className="app-container full-width full-height gradient">
      {
        (!gameOver) ?
        <div className="">{currentTurn}</div>
        :
        <EndHeader winner={winner} handleResetGame={handleResetGame}/>
      }
        <Gameboards 
          width={width} 
          player={player} 
          computerPlayer={computerPlayer} 
          playerGameboard={playerGameboard} 
          computerGameboard={computerGameboard}
          handleSetCurrentTurn={handleSetCurrentTurn}
          gameOver={gameOver}
        />
    </div>
  );
}

export default App;
