document.querySelector("html").
	style.setProperty("filter",
	"grayscale(100%)", "important");

const bg_black_exclurls = [
	"web.whatsapp.com",
	"web.telegram.org",
	"app.element.io",
	"www.google.com",
	"www.youtube.com"
];

var mstyle = `
	*:not(img) {
			color: white !important;
	}

	* {
			transition: none !important;
			animation: none !important;
			text-decoration: none !important;
			border-bottom: none !important;
	}

	img { filter: invert(100%); }
`;

if( ! bg_black_exclurls.includes(window.location.hostname) ) {
	mstyle = mstyle + `
		*:not(img) {
				background: black !important;
		}
	`;
}

let mstsh = document.createElement("style");
mstsh.innerText = mstyle;
document.head.appendChild(mstsh);

if( ! bg_black_exclurls.includes(window.location.hostname) ) {
	var elmnts = document.querySelectorAll("*:not(img)");
	for( let i = 0; i < elmnts.length; i++ ) {
		elmnts[i].style.setProperty("color", "white", "important");
		elmnts[i].style.setProperty("background", "black", "important");
	}
}
