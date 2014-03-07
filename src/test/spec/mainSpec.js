describe("Roman Numeral Calculator", function() {
    it("corresponding values for single roman numerals are correct", function() {
        expect(values.I).toEqual(1);
        expect(values.V).toEqual(5);
        expect(values.X).toEqual(10);
        expect(values.L).toEqual(50);
        expect(values.C).toEqual(100);
        expect(values.D).toEqual(500);
        expect(values.M).toEqual(1000);
    });
});