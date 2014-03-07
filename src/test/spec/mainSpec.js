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

    it("roman numeral validator returns true for valid roman numerals", function() {
        expect(isRomanNumeral('I')).toBe(true);
        expect(isRomanNumeral('II')).toBe(true);
        expect(isRomanNumeral('III')).toBe(true);
        expect(isRomanNumeral('IV')).toBe(true);
        expect(isRomanNumeral('V')).toBe(true);
        expect(isRomanNumeral('VI')).toBe(true);
        expect(isRomanNumeral('VII')).toBe(true);
        expect(isRomanNumeral('VIII')).toBe(true);
        expect(isRomanNumeral('IX')).toBe(true);
        expect(isRomanNumeral('X')).toBe(true);
        expect(isRomanNumeral('XX')).toBe(true);
        expect(isRomanNumeral('XXX')).toBe(true);
        expect(isRomanNumeral('XL')).toBe(true);
        expect(isRomanNumeral('L')).toBe(true);
        expect(isRomanNumeral('LX')).toBe(true);
        expect(isRomanNumeral('LXX')).toBe(true);
        expect(isRomanNumeral('LXXX')).toBe(true);
        expect(isRomanNumeral('XC')).toBe(true);
        expect(isRomanNumeral('C')).toBe(true);
        expect(isRomanNumeral('CC')).toBe(true);
        expect(isRomanNumeral('CCC')).toBe(true);
        expect(isRomanNumeral('CD')).toBe(true);
        expect(isRomanNumeral('D')).toBe(true);
        expect(isRomanNumeral('DC')).toBe(true);
        expect(isRomanNumeral('DCC')).toBe(true);
        expect(isRomanNumeral('DCCC')).toBe(true);
        expect(isRomanNumeral('CM')).toBe(true);
        expect(isRomanNumeral('M')).toBe(true);
        expect(isRomanNumeral('MM')).toBe(true);
        expect(isRomanNumeral('MMM')).toBe(true);
        expect(isRomanNumeral('MMMM')).toBe(true);
    });
});