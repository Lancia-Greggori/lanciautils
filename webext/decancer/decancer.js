document.querySelector("html").style.setProperty("filter", "grayscale(100%)", "important");

const exclurls = [
	"web.whatsapp.com",
	"web.telegram.org",
	"app.element.io",
	"www.youtube.com"
];

var mstyle = `
	*:not(img) {
			color: white !important;
			text-decoration: none !important;
			border-bottom: none !important;
	}

	* {
			transition: none !important;
			animation: none !important;
	}

	img { filter: invert(100%); }
`;

if( ! exclurls.includes(window.location.hostname) ) {
	mstyle = mstyle + `
		*:not(img) {
				background: black !important;
		}
	`;
}

let mstsh = document.createElement("style");
mstsh.innerText = mstyle;
document.head.appendChild(mstsh);

var elmnts = document.querySelectorAll("a");
for( let i = 0; i < elmnts.length; i++ ) {
	elmnts[i].style.setProperty("color", "inherit", "important");
}
var elmnts = document.querySelectorAll("div, span");
for( let i = 0; i < elmnts.length; i++ ) {
	elmnts[i].style.setProperty("color", "inherit", "important");
	elmnts[i].style.setProperty("background", "inherit", "important");
}
