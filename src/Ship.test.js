import Ship from "./Ship.js"

describe('testing ship functions', () => {
    let testShip;
    beforeEach(() => {
        testShip = Ship("test", ["A8","A9","A10"]);
    })
    test("placement Tiles are [A8,A9,A10]", () => {
        expect(testShip.placementTiles).toStrictEqual(["A8","A9","A10"]);
    })
    test("Ship registers a single hit", () => {
        testShip.hit("A8");
        expect(testShip.hitTiles).toStrictEqual(["A8"]);
    })
    test("Ship registers multiple hits", () => {
        testShip.hit("A8");
        testShip.hit("A9");
        expect(testShip.hitTiles).toStrictEqual(["A8","A9"]);
    })
    test("Ship registers when it is not sunk", () => {
        testShip.hit("A8");
        testShip.hit("A9");
        expect(testShip.isSunk()).toBeFalsy();
    })
    test("Ship registers when it is sunk", () => {
        testShip.hit("A8");
        testShip.hit("A9");
        testShip.hit("A10");
        expect(testShip.isSunk()).toBeTruthy();
    })
})