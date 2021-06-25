import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";
import Player from "./Player.js";

const GameLoop = () => {
    const player = Player(true, 'player')
    const computerPlayer = Player(false, 'computer');
    const playerGameboard = Gameboard('player');
    const computerGameboard = Gameboard('computer');
    const ship1 = Ship(5, 'carrier');
    const ship2 = Ship(4, 'battleship');
    const ship3 = Ship(3, 'cruiser');
    const ship4 = Ship(3, 'submarine');
    const ship5 = Ship(2, 'destroyer'); 
    
    playerGameboard.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
    playerGameboard.placeShip(ship2, ["B1", "B2", "B3", "B4"]);
    playerGameboard.placeShip(ship3, ["D4", "E4", "F4"]);
    playerGameboard.placeShip(ship4, ["G3", "G4", "G5"]);
    playerGameboard.placeShip(ship5, ["I5", "I6"]);
    computerGameboard.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
    computerGameboard.placeShip(ship2, ["B1", "B2", "B3", "B4"]);
    computerGameboard.placeShip(ship3, ["D4", "E4", "F4"]);
    computerGameboard.placeShip(ship4, ["G3", "G4", "G5"]);
    computerGameboard.placeShip(ship5, ["I5", "I6"]);
    console.log('gameloop mounts?');

    return { player, computerPlayer, playerGameboard, computerGameboard }
}

export default GameLoop;