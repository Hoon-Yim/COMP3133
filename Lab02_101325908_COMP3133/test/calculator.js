const expect = require("chai").expect;
const calculator = require("../calculator");

describe("Test Calculator", () => {
    describe("Add", () => {
        const add = calculator.add(5, 2);
        it("add(5, 2) expected result 7", () => {
            expect(add).to.equal(7);
            expect(add).to.equal(8);
        });
    });

    describe("Sub", () => {
        const sub = calculator.sub(5, 2);
        it("sub(5, 2) expected result 3", () => {
            expect(sub).to.equal(3);
            expect(sub).to.equal(5);
        });
    });

    describe("Mul", ()=> {
        const mul = calculator.mul(5, 2);
        it("mul(5, 2) expected result 10", () => {
            expect(mul).to.equal(10);
            expect(mul).to.equal(12);
        })
    });

    describe("Div", ()=> {
        const div = calculator.div(10, 2);
        it("div(10, 2) expected result 5", () => {
            expect(div).to.equal(5);
            expect(div).to.equal(2);
        })
    });
});