var passLength = document.getElementById("passLength");
var passUppercase = document.getElementById('passUppercase');
var passNumbers = document.getElementById('passNumbers')
var passSymbols = document.getElementById('passSymbols');
var passOut = document.getElementById('password');

const passDictionary = {
	"letters": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
	"numbers": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",],
	"symbols": ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]"]
}

function getPassword() {
	var password = "";
	for (var i = 0; i < passLength.value; i++) {
		var l = getLetters(passUppercase.checked);
		var n = getNumber(passNumbers.checked)
		var s = getSymbol(passSymbols.checked)
		if (l !== undefined) {
			password = password + passDictionary.letters[l]
		}
		if (n !== undefined) {
			password = password + passDictionary.numbers[n]
		}
		if (s !== undefined) {
			password = password + passDictionary.symbols[s];
		}
	}
	passOut.innerHTML = password;
	console.log(passLength.value)
};
function getSymbol(input) {
	var out;
	if (input === true) {
		out = Math.floor(Math.random() * (passDictionary.symbols.length - 1));
	}
	return out;
};
function getNumber(input) {
	var out;
	if (input === true) {
		out = Math.floor(Math.random() * (passDictionary.numbers.length - 1));
	}
	return out;
};
function getLetters(input) {
	var out;
	if (input === true) {
		out = Math.floor(Math.random() * (passDictionary.letters.length - 1));
	}
	return out;
};