var values = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
var romanNumeralRegEx = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
var romanNumeralKey = [
	['','I','II','III','IV','V','VI','VII','VIII','IX'],
	['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
	['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
	['','M','MM','MMM', 'MMM']
];

function isRomanNumeral(value) {
	return romanNumeralRegEx.test(value.toUpperCase());
}

function integerToRoman(value) {
	var integerArray = value.toString().split('').reverse();
	var romanNumeral = '';
	for(i = integerArray.length-1; i >= 0; i--) {
		romanNumeral = romanNumeral + romanNumeralKey[i][integerArray[i]];
	}
	return romanNumeral;
}

function romanToInteger(value) {
	var charArray=value.split('');
	var counter = 0, previousValue = 0, currentValue, store, total = 0;
	for (i = charArray.length-1; i >= 0; i--) {
		currentValue = values[charArray[i]];
		if (currentValue >= previousValue) {
			total = total + currentValue;
		} else {
			total = total - currentValue;
		}
		previousValue = currentValue;
	}
	return total;
}

function sumRomanNumerals(value1, value2) {
	if (isRomanNumeral(value1) && isRomanNumeral(value2)) {
		return true
	} else {
		return 'Error: invalid format';
	}
}