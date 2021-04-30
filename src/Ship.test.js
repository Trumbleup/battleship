import Ship from "./Ship.js"

describe('testing ship functions', () => {
    let testShip;
    beforeEach(() => {
        testShip = Ship("test", [8,9,10]);
    })
    test("placement Tiles are [8,9,10]", () => {
        expect(testShip.placementTiles).toStrictEqual([8,9,10]);
    })
    test("Ship registers a single hit", () => {
        testShip.hit(8);
        expect(testShip.hitTiles).toStrictEqual([8]);
    })
    test("Ship registers multiple hits", () => {
        testShip.hit(8);
        testShip.hit(9);
        expect(testShip.hitTiles).toStrictEqual([8,9]);
    })
    test("Ship registers when it is not sunk", () => {
        testShip.hit(8);
        testShip.hit(9);
        expect(testShip.isSunk()).toBeFalsy();
    })
    test("Ship registers when it is sunk", () => {
        testShip.hit(8);
        testShip.hit(9);
        testShip.hit(10);
        expect(testShip.isSunk()).toBeTruthy();
    })
})