const hostname = window.location.hostname;
const url = window.location.href;
const hts = document.querySelector("html").style;
var fragile = false;
const appinv = [
	"www.desmos.com",
	"www.ejemplos.co",
	"sintaxis.org"
];

if( appinv.includes(hostname) ) {

	hts.setProperty("filter",
	"invert(1)", "important");

} else {

	hts.setProperty("filter",
	"grayscale(1)", "important");

	const bg_black_excl_urls = [
		"web.whatsapp.com",
		"web.telegram.org",
		"app.element.io",
		"www.youtube.com"
	];
	const font_excl_urls = [
		"en.wikipedia.org",
		"es.wikipedia.org"
	];
	const transform_excl_urls = [
		"web.whatsapp.com",
		"web.telegram.org",
		"www.google.com",
		"github.com",
		"www.quora.com"
	];

	var mstyle = `

		*:not(img), ::after, ::before,
		::first-letter {
			color: white !important;
		}

		*, ::after, ::before {
			transition: none !important;
			animation: none !important;
			text-decoration: none !important;
			text-shadow: none !important;
			box-shadow: none !important;
			border-bottom: none !important;
			background-image: none !important;
		}

		button, select {
			color: white !important;
			background: black !important;
		}

		img {
			filter: invert(1);
		}

		svg, audio, video {
			display: none !important;
		}

		input {
			autofocus: false !important;
		}

	`;

	if( hostname === "www.google.com" &&
		url.includes("tbm=isch") ) {

			mstyle = mstyle + `
				a {
					display: inline !important;
				}
			`;
			fragile = true;

	} else {

		if(
			!url.includes(".jpg") &&
			!url.includes(".png") &&
			!url.includes(".gif")
		) {
			mstyle = mstyle + `
				img:not(
					[class*="math" i],
					[src*="math" i],
					[src*="wikimedia.org"][src$=".svg.png"],
					[src*="gstatic.com/education"]
				) {
					display: none !important;
				}
			`;
		}

		if( hostname.includes("wikipedia.org") ) {
			mstyle = mstyle + `
				a[href^="#cite_note"] {
					display: none !important;
				}
			`;
		}

		tmpstyle = `
			body, ::after, ::before,
			div, section {
				background: black !important;
				background-color: black !important;
			}
		`;
		var scripts = document.querySelectorAll("script");
		for( let i = 0; i < scripts.length; i++ ) {
			if( scripts[i].type.includes("math") ) {
				mstyle += tmpstyle;
				fragile = true;
				break;
			} else if( typeof scripts[i].src !== "undefined" &&
				scripts[i].src.includes("math") ) {
					mstyle += tmpstyle;
					fragile = true;
					break;
			}
		}
	}

	if( !bg_black_excl_urls.includes(hostname) &&
		!fragile ) {
			mstyle = mstyle + `
				*:not(img), ::after, ::before,
				section, div {
					background: black !important;
				}
			`;
	}
	if( !font_excl_urls.includes(hostname) &&
		!fragile ) {
		mstyle = mstyle + `
			*, ::after, ::before {
				font: 20px sans-serif !important;
				font-weight: normal !important;
			}
			::first-letter {
				font: 20px sans-serif !important;
				font-weight: normal !important;
				float: none !important;
				margin: 0 !important;
			}
		`;
	}
	if( !transform_excl_urls.includes(hostname) ) {
		mstyle = mstyle + `
			*, ::after, ::before {
				transform: none !important;
			}
		`;
	}


	let mstsh = document.createElement("style");
	mstsh.innerText = mstyle;
	document.head.appendChild(mstsh);

	if( !bg_black_excl_urls.includes(hostname) ) {
		var elmnts = document.
			querySelectorAll("*:not(img)");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.
				setProperty("color", "white",
				"important");
			elmnts[i].style.
				setProperty("background", "black",
				"important");
		}
	}
	if( !font_excl_urls.includes(hostname) &&
		!fragile ) {
		var elmnts = document.
			querySelectorAll("*");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.
				setProperty("font", "20px sans-serif",
				"important");
			elmnts[i].style.
				setProperty("font-weight", "normal",
				"important");
		}
	}
	var imgs = document.querySelectorAll("img");
	for( let i = 0; i < imgs.length; i++ ) {
		if( !imgs[i].src.includes("svg") )
			imgs[i].style.
				setProperty("background", "black",
				"important");
	}

}
