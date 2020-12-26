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
		var l = Math.floor(Math.random() * (passDictionary.letters.length - 1));
		var n = Math.floor(Math.random() * (passDictionary.numbers.length - 1));
		var s = Math.floor(Math.random() * (passDictionary.symbols.length - 1));

		password = password + passDictionary.letters[l] + passDictionary.numbers[n] + passDictionary.symbols[s];
	}
	passOut.innerHTML = password;
	console.log(getSymbol());
};
function checkingCheckbox(input) {
	var symState = passSymbols.checked;
	var out;
	if (symState === true) {
		out = "Checked"
	} else {
		out = "Not checked"
	}
	return out;
};