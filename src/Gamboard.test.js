import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

describe("Testing Gameboard placements", () => {
    let gameBoard1;
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5
    beforeEach(() => {
        gameBoard1 = Gameboard();
        ship1 = Ship(5, 'carrier');
        ship2 = Ship(4, 'battleship');
        ship3 = Ship(3, 'cruiser');
        ship4 = Ship(3, 'submarine');
        ship5 = Ship(2, 'destroyer');   
    })
    test("Can store a single ship", () => {
        gameBoard1.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
        expect(gameBoard1.shipPlacements).toStrictEqual({
            'carrier': {
                ship: ship1,
                coordinates: ["A1", "A2", "A3", "A4", "A5"]
            }
        });
    });
    test("Can store all ships", () => {
        gameBoard1.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
        gameBoard1.placeShip(ship2, ["D1", "E1", "F1", "G1"]);
        gameBoard1.placeShip(ship3, ["D3", "D4", "D5"]);
        gameBoard1.placeShip(ship4, ["E6", "E7", "E8"]);
        gameBoard1.placeShip(ship5, ["F5", "G5"]);
        expect(gameBoard1.shipPlacements).toStrictEqual({
            'carrier': {
                ship: ship1,
                coordinates: ["A1", "A2", "A3", "A4", "A5"]
            }, 
            'battleship': {
                ship: ship2,
                coordinates: ["D1", "E1", "F1", "G1"]
            },
            'cruiser': {
                ship: ship3,
                coordinates: ["D3", "D4", "D5"]
            },
            'submarine': {
                ship: ship4,
                coordinates: ["E6", "E7", "E8"]
            },
            'destroyer': {
                ship: ship5,
                coordinates: ["F5", "G5"]
            }
        });
    });
})

describe("Testing attack functions", () => {
    let gameBoard1;
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5
    beforeEach(() => {
        gameBoard1 = Gameboard();
        ship1 = Ship(5, 'carrier');
        ship2 = Ship(4, 'battleship');
        ship3 = Ship(3, 'cruiser');
        ship4 = Ship(3, 'submarine');
        ship5 = Ship(2, 'destroyer');
        gameBoard1.placeShip(ship1, ["B1", "B2", "B3", "B4", "B5"]);
        gameBoard1.placeShip(ship2, ["D1", "E1", "F1", "G1"]);
        gameBoard1.placeShip(ship3, ["D3", "D4", "D5"]);
        gameBoard1.placeShip(ship4, ["E6", "E7", "E8"]);
        gameBoard1.placeShip(ship5, ["F5", "G5"]);   
    })
    test("Carrier should return hitTiles equaling ['B1']", () => {
        gameBoard1.receiveAttack("B1");
        expect(gameBoard1.shipPlacements['carrier'].ship.hitTiles).toStrictEqual(["B1"]);
    })
})




