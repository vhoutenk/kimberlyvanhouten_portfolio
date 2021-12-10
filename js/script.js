// JavaScript source code


document.querySelector("#buy_form").addEventListener("submit", function () {
	let name = document.querySelector("fname");
	let email = document.querySelector("email");
	let note = document.querySelector("note");
	console.log("it worked!!!");
	console.log(fname.value);
	console.log(email.value);
	console.log(note.value);

	if (fname.value == "") {
		alert("Name must be filled out");
		return false;
	}
	if (email.value == "") {
		alert("Email must be filled out");
		return false;
	}
	if (note.value == "") {
		alert("You must specify what I can make you");
		return false;
	}
});


