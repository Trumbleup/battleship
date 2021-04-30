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
        ship1 = Ship('Cruiser', ["B4","B5","B6"]);
        ship2 = Ship('Carrier', ["A1","A2","A3","A4","A5"]);
        ship3 = Ship('Battleship', ["C3","D3","E3","F3"]);
        ship4 = Ship('Submarine', ["J1","J2","J3"]);
        ship5 = Ship('Destroyer', ["E6","E7"]);
    })
    test("Can store a single ship", () => {
        gameBoard1.placeShip(ship1);
        expect(gameBoard1.shipPlacements).toStrictEqual({'Cruiser': ["B4","B5","B6"]});
    })
    test("Can store all ships", () => {
        gameBoard1.placeShip(ship1);
        gameBoard1.placeShip(ship2);
        gameBoard1.placeShip(ship3);
        gameBoard1.placeShip(ship4);
        gameBoard1.placeShip(ship5);
        expect(gameBoard1.shipPlacements).toStrictEqual(
            {
                'Cruiser': ["B4","B5","B6"], 
                'Carrier': ["A1","A2","A3","A4","A5"],
                'Battleship': ["C3","D3","E3","F3"],
                'Submarine': ["J1","J2","J3"],
                'Destroyer': ["E6","E7"]
            }
        );
    })
})




