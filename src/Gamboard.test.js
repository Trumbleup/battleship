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
        ship1 = Ship('Cruiser', [52,53,54]);
        ship2 = Ship('Carrier', [1,2,3,4,5]);
        ship3 = Ship('Battleship', [91,81,71,61]);
        ship4 = Ship('Submarine', [46,47,48]);
        ship5 = Ship('Destroyer', [8,18]);
    })
    test("Can store a single ship", () => {
        gameBoard1.placeShip(ship1);
        expect(gameBoard1.shipPlacements).toStrictEqual({'Cruiser': [52,53,54]});
    })
    test("Can store all ships", () => {
        gameBoard1.placeShip(ship1);
        gameBoard1.placeShip(ship2);
        gameBoard1.placeShip(ship3);
        gameBoard1.placeShip(ship4);
        gameBoard1.placeShip(ship5);
        expect(gameBoard1.shipPlacements).toStrictEqual(
            {
                'Cruiser': [52,53,54], 
                'Carrier': [1,2,3,4,5],
                'Battleship': [91,81,71,61],
                'Submarine': [46,47,48],
                'Destroyer': [8,18]
            }
        );
    })
})




