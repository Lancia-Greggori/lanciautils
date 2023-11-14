const hstnm = window.location.hostname;
const url = window.location.href;
const hts = document.querySelector("html").style;

if( hstnm === "www.desmos.com" ) {

		hts.setProperty("filter",
		"invert(1)", "important");

} else {

		hts.setProperty("filter",
		"grayscale(1)", "important");

	const bg_black_excl_urls = [
		"web.whatsapp.com",
		"web.telegram.org",
		"app.element.io",
		"www.geeksforgeeks.org",
		"www.youtube.com"
	];
	const font_excl_urls = [
		"math.libretexts.org",
		"chem.libretexts.org",
		"phys.libretexts.org",
		"en.wikipedia.org"
	];
	const transform_excl_urls = [
		"web.whatsapp.com",
		"web.telegram.org",
		"www.google.com",
		"www.quora.com"
	];

	var mstyle = `
		*:not(img) {
			color: white !important;
		}

		* {
			transition: none !important;
			animation: none !important;
			text-decoration: none !important;
			text-shadow: none !important;
			box-shadow: none !important;
			border-bottom: none !important;
			background-image: none !important;
		}

		img {
			filter: invert(1);
		}
	`;

	if( !bg_black_excl_urls.includes(hstnm) &&
		!hstnm.includes("libretexts.org") ) {
			mstyle = mstyle + `
				*:not(img) {
					background: black !important;
				}
			`;
	}
	if( !font_excl_urls.includes(hstnm) ) {
		mstyle = mstyle + `
			* {
				font: 20px sans-serif !important;
				font-weight: normal !important;
			}
		`;
	}
	if( !transform_excl_urls.includes(hstnm) ) {
		mstyle = mstyle + `
			* {
				transform: none !important;
			}
		`;
	}
	if( hstnm === "www.google.com" &&
		url.includes("?sca_esv") ) {
		mstyle = mstyle + `
			a {
				display: inline !important
			}
		`;
	} else {
		mstyle = mstyle + `
			img {
				display: none !important
			}
		`;
	}

	let mstsh = document.createElement("style");
	mstsh.innerText = mstyle;
	document.head.appendChild(mstsh);

	if( !bg_black_excl_urls.includes(hstnm) ) {
		var elmnts = document.querySelectorAll("*:not(img)");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.setProperty("color", "white", "important");
			elmnts[i].style.setProperty("background", "black", "important");
		}
	}
	if( !font_excl_urls.includes(hstnm) ) {
		var elmnts = document.querySelectorAll("*");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.setProperty("font", "20px sans-serif", "important");
			elmnts[i].style.setProperty("font-weight", "normal", "important");
		}
	}
	var imgs = document.querySelectorAll("img");
	for( let i = 0; i < imgs.length; i++ ) {
		if( !imgs[i].src.includes("svg") )
			imgs[i].style.setProperty("background", "black", "important");
	}

}
