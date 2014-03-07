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

    it("roman numeral validator returns false for invalid roman numerals", function() {
        expect(isRomanNumeral('george')).toBe(false);
        expect(isRomanNumeral('can')).toBe(false);
        expect(isRomanNumeral('suck')).toBe(false);
        expect(isRomanNumeral('it')).toBe(false);
        expect(isRomanNumeral('1231')).toBe(false);
        expect(isRomanNumeral('gwet34t')).toBe(false);
        expect(isRomanNumeral('dc123')).toBe(false);
        expect(isRomanNumeral('WEGF#%DG')).toBe(false);
        expect(isRomanNumeral('W#52gdg!')).toBe(false);
        expect(isRomanNumeral('VXX')).toBe(false);
        expect(isRomanNumeral('IVI')).toBe(false);
        expect(isRomanNumeral('DMMD')).toBe(false);
        expect(isRomanNumeral('MCILI')).toBe(false);
    });

    it("convert integer to roman numeral", function() {
        expect(integerToRoman(1)).toEqual('I');
        expect(integerToRoman(2)).toEqual('II');
        expect(integerToRoman(3)).toEqual('III');
        expect(integerToRoman(4)).toEqual('IV');
        expect(integerToRoman(5)).toEqual('V');
        expect(integerToRoman(6)).toEqual('VI');
        expect(integerToRoman(7)).toEqual('VII');
        expect(integerToRoman(8)).toEqual('VIII');
        expect(integerToRoman(9)).toEqual('IX');
        expect(integerToRoman(10)).toEqual('X');
        expect(integerToRoman(12)).toEqual('XII');
        expect(integerToRoman(14)).toEqual('XIV');
        expect(integerToRoman(17)).toEqual('XVII');
        expect(integerToRoman(19)).toEqual('XIX');
        expect(integerToRoman(394)).toEqual('CCCXCIV');
        expect(integerToRoman(475)).toEqual('CDLXXV');
        expect(integerToRoman(983)).toEqual('CMLXXXIII');
        expect(integerToRoman(1795)).toEqual('MDCCXCV');
        expect(integerToRoman(2175)).toEqual('MMCLXXV');
        expect(integerToRoman(3999)).toEqual('MMMCMXCIX');
    });
});