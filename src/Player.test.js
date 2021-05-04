import Player from "./Player";
import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

test("Player turn is changed to true", () => {
    const player1 = Player(false, 'player');
    player1.setTurn(true);
    expect(player1.getTurn()).toBeTruthy();
});

test("Player turn is changed to false", () => {
    const player1 = Player(true, 'player');
    player1.setTurn(false);
    expect(player1.getTurn()).toBeFalsy();
});

test("Player turn is false", () => {
    const player1 = Player(false, 'player');
    expect(player1.getTurn()).toBeFalsy();
});

test("Player's id is player", () => {
    const player1 = Player(false, 'player');
    expect(player1.getPlayerId()).toBe('player');
});

describe('Testing the Player attack method', () => {
    let player;
    let computerPlayer;
    let playerGameboard;
    let computerGameboard;
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5;
    beforeEach(() => {
        player = Player(true, 'player');
        computerPlayer = Player(false, 'computer');
        playerGameboard = Gameboard('player');
        computerGameboard = Gameboard('computer');
        ship1 = Ship(5, 'carrier');
        ship2 = Ship(4, 'battleship');
        ship3 = Ship(3, 'cruiser');
        ship4 = Ship(3, 'submarine');
        ship5 = Ship(2, 'destroyer');
        playerGameboard.placeShip(ship1, ["B1", "B2", "B3", "B4", "B5"]);
        playerGameboard.placeShip(ship2, ["D1", "E1", "F1", "G1"]);
        playerGameboard.placeShip(ship3, ["D3", "D4", "D5"]);
        playerGameboard.placeShip(ship4, ["E6", "E7", "E8"]);
        playerGameboard.placeShip(ship5, ["F5", "G5"]);
        computerGameboard.placeShip(ship1, ["C1", "C2", "C3", "C4", "C5"]);
        computerGameboard.placeShip(ship2, ["E1", "F1", "G1", "H1"]);
        computerGameboard.placeShip(ship3, ["E3", "E4", "E5"]);
        computerGameboard.placeShip(ship4, ["F6", "F7", "F8"]);
        computerGameboard.placeShip(ship5, ["I5", "J5"]); 
    })
    test('Player turn is false after attack', () => {
        player.attack(computerPlayer, computerGameboard, "C1");
        expect(player.getTurn()).toBeFalsy();
    })
    test('Computer player turn is true after Player attacks', () => {
        player.attack(computerPlayer, computerGameboard, "F1");
        expect(computerPlayer.getTurn()).toBeTruthy();
    })
    test("Computer player's gameboard correctly records a missed shot by Player", () => {
        player.attack(computerPlayer, computerGameboard, "A1");
        expect(computerGameboard.getMissedShots()).toStrictEqual(["A1"]);
    })
    test("Player's gameboard correctly records a missed shot by the Computer player", () => {
        computerPlayer.attack(player, playerGameboard, "A1");
        expect(playerGameboard.getMissedShots()).toStrictEqual(["A1"]);
    })
    test("Computer player's gameboard correctly records a shot by the Player", () => {
        player.attack(computerPlayer, computerGameboard, "H1");
        expect(computerGameboard.shipPlacements['battleship'].ship.getHitTiles()).toStrictEqual(["H1"]);
    })
    test("Player's gameboard correctly records a shot by the Computer player", () => {
        computerPlayer.attack(player, playerGameboard, "D1");
        expect(playerGameboard.shipPlacements['battleship'].ship.getHitTiles()).toStrictEqual(["D1"]);
    })
})