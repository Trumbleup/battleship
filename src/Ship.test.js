import Ship from "./Ship.js"

describe('testing ship functions', () => {
    let testShip;
    beforeEach(() => {
        testShip = Ship(5);
    })
    test("Ship length is equal to 5", () => {
        expect(testShip.length).toBe(5);
    })
    test("Ship registers a single hit", () => {
        testShip.hit("A8");
        expect(testShip.getHitTiles()).toStrictEqual(["A8"]);
    })
    test("Ship registers multiple hits", () => {
        testShip.hit("A8");
        testShip.hit("A9");
        expect(testShip.getHitTiles()).toStrictEqual(["A8","A9"]);
    })
    test("Ship registers when it is not sunk", () => {
        testShip.hit("A8");
        testShip.hit("A9");
        expect(testShip.isSunk()).toBeFalsy();
    })
    test("Ship registers when it is sunk", () => {
        testShip.hit("A6");
        testShip.hit("A7");
        testShip.hit("A8");
        testShip.hit("A9");
        testShip.hit("A10");
        expect(testShip.isSunk()).toBeTruthy();
    })
})