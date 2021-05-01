import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

describe("Testing Gameboard functions", () => {
    let gameBoard1;
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5
    beforeEach(() => {
        gameBoard1 = Gameboard();
        ship1 = Ship('cruiser', ["B4","B5","B6"]);
        ship2 = Ship('carrier', ["A1","A2","A3","A4","A5"]);
        ship3 = Ship('battleship', ["C3","D3","E3","F3"]);
        ship4 = Ship('submarine', ["J1","J2","J3"]);
        ship5 = Ship('destroyer', ["E6","E7"]);
    })
    test("Can store a single ship", () => {
        gameBoard1.placeShip(ship1);
        expect(gameBoard1.shipPlacements).toStrictEqual({'cruiser': ship1});
    })
    test("Can store all ships", () => {
        gameBoard1.placeShip(ship1);
        gameBoard1.placeShip(ship2);
        gameBoard1.placeShip(ship3);
        gameBoard1.placeShip(ship4);
        gameBoard1.placeShip(ship5);
        expect(gameBoard1.shipPlacements).toStrictEqual(
            {
                'cruiser': ship1, 
                'carrier': ship2,
                'battleship': ship3,
                'submarine': ship4,
                'destroyer': ship5
            }
        );
    })
})




