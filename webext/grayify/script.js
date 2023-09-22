if(/google\.com/.test(window.location.href)) {
	var styles = '* { filter: grayscale(100%); }'
	var styleSheet = document.createElement("style")
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
} else {
	for (let i = 0; i < 100; i++) {
		document.querySelector('html').style.filter = "grayscale(100%)";
	}
}
