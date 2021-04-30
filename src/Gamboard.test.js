import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";



test("Can store a single ship in shipPlacements object", () => {
    const gameBoard1 = Gameboard();
    const ship1 = Ship('Cruiser', [52,53,54]);
    gameBoard1.placeShip(ship1);
    expect(gameBoard1.shipPlacements).toStrictEqual({'Cruiser': [52,53,54]});
})

