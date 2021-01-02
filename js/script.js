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
	var passArray = [];
	for (var i = 0; i < passLength.value; i++) {
		var l = getLetters(passUppercase.checked);
		var n = getNumber(passNumbers.checked);
		var s = getSymbol(passSymbols.checked);
		if (l !== undefined) {
			passArray.push(passDictionary.letters[l])
		};
		if (n !== undefined) {
			passArray.push(passDictionary.numbers[n])
		};
		if (s !== undefined) {
			passArray.push(passDictionary.symbols[s])
		};
		var passArrayIndex = Math.floor(Math.random() * (passArray.length));
		password = password + passArray[passArrayIndex];
	}
	if (passArray.length !== 0) {
		passOut.innerHTML = password;
	}
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
function copyTo() {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById("password"));
		range.select().createTextRange();
		document.execCommand("copy");
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById("password"));
		window.getSelection().addRange(range);
		document.execCommand("copy");
	}
}