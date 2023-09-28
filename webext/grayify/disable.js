document.getElementById("disableButton").addEventListener("click", myDisable);

function myDisable() {
	document.querySelector('html').style.setProperty("filter", "grayscale(0)", "important");
}
