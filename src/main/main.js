var values = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
var romanNumeralRegEx = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');

function isRomanNumeral(value) {
	return romanNumeralRegEx.test(value.toUpperCase());
}

function getOnesPlace(value) {
	return//code
}

function getTensPlace(value) {
	return//code
}

function getHundredsPlace(value) {
	return//code
}

function getThousandsPlace(value) {
	return//code
}