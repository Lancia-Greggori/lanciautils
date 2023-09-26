if (/google\.com/.test(window.location.href)) {
	var styles = '* { filter: grayscale(100%); }'
	var styleSheet = document.createElement("style")
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
} else {
	document.querySelector('html').style.filter = "grayscale(100%)";
}
