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
        player.attack(computerPlayer, computerGameboard, "A1");
        computerPlayer.attack(player, playerGameboard, "A1");
        expect(playerGameboard.getMissedShots()).toStrictEqual(["A1"]);
    })
    test("Computer player's gameboard correctly records a shot by the Player", () => {
        player.attack(computerPlayer, computerGameboard, "H1");
        expect(computerGameboard.shipPlacements['battleship'].ship.getHitTiles()).toStrictEqual(["H1"]);
    })
    test("Player's gameboard correctly records a shot by the Computer player", () => {
        player.attack(computerPlayer, computerGameboard, "A1");
        computerPlayer.attack(player, playerGameboard, "D1");
        expect(playerGameboard.shipPlacements['battleship'].ship.getHitTiles()).toStrictEqual(["D1"]);
    })
    test("Player cannot attack enemy gameboard after their turn", () => {
        player.attack(computerPlayer, computerGameboard, "A1");
        expect(player.attack(computerPlayer, computerGameboard, "A2")).toBeFalsy();
    })
    test("Player can attack enemy gameboard after enemy's turn", () => {
        player.attack(computerPlayer, computerGameboard, "A1");
        computerPlayer.attack(player, playerGameboard, "D1");
        expect(player.attack(computerPlayer, computerGameboard, "A2")).toBeTruthy();
    })
})

describe("Testing computer AI functions", () => {
    let player;
    let computerPlayer;
    let mockComputerPlayer
    let playerGameboard;
    let computerGameboard;
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5;
    beforeEach(() => {
        mockComputerPlayer = {
            isTurn: true,
            playerId: "computer",
            getPlayerId: () => playerId,
            getTurn: () => isTurn,
            setTurn: (newTurn) => {
               isTurn = newTurn
            },
            playerHasAttacked: [
                "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10",
                "B1","B2","B3","B4","B5","B6","B7","B8","B9","B10",
                "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10",
                "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10",
                "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
                "F1","F2","F3","F4","F5","F6","F7","F8","F9","F10",
                "G1","G2","G3","G4","G5","G6","G7","G8","G9","G10",
                "H1","H2","H3","H4","H5","H6","H7","H8","H9","H10",
                "I1","I2","I3","I4","I5","I6","I7","I8","I9","I10"
            ],
            attack: (enemyPlayer, enemyGameboard, coord) => {
                if (!getTurn()) {
                    return null;
                } else {
                    setTurn(false);
                    playerHasAttacked.push(coord);
                    enemyGameboard.receiveAttack(coord);
                    enemyPlayer.setTurn(true);
                    return true
                } 
            },
            getRandomCoordinate: function() {
                const generateRandomLetter = () => {
                    const alphabetRange = "ABCDEFGHIJ";
                    return alphabetRange[Math.floor(Math.random() * alphabetRange.length)];
                }
                const generateRandomNumber = () => {
                    return Math.floor(Math.random() * 10) + 1
                } 
                const randomLetter = generateRandomLetter();
                const randomNumber = generateRandomNumber();
                const randomCoordinate = randomLetter + randomNumber;
                if (this.playerHasAttacked.includes(randomCoordinate)) {
                  return this.getRandomCoordinate()
                } else {
                  return randomCoordinate;  
                } 
            }
        }
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
    });
    test("Computer AI correctly generates random letter from A-J", () => {
        expect(computerPlayer.generateRandomLetter()).toMatch(/[A-J]/);
    })
    test("Computer AI does not generate random letter outside of A-J", () => {
        expect(computerPlayer.generateRandomLetter()).not.toMatch(/[K-Z]/);
    })
    test("Computer AI generates random coordinate", () => {
        expect(computerPlayer.getRandomCoordinate()).toMatch(/[A-J]1[0]|[1-9]/);
    }) 
    test("Computer AI generates a random coordinate that Computer hasn't attacked", () => {
        const mockHasAttacked = mockComputerPlayer.playerHasAttacked;
        expect(mockHasAttacked.includes(mockComputerPlayer.getRandomCoordinate())).toBeFalsy();
    });
})