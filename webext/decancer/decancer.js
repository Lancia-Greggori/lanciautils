if( window.location.hostname === "www.desmos.com" ) {

	document.querySelector("html").
		style.setProperty("filter",
		"invert(1)", "important");

} else {

	document.querySelector("html").
		style.setProperty("filter",
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
		}

		img { filter: invert(1); }
	`;

	if( !bg_black_excl_urls.includes(window.location.hostname) &&
		!window.location.hostname.includes("libretexts.org") ) {
			mstyle = mstyle + `
				*:not(img) {
					background: black !important;
				}

				* {
					transform: none !important;
				}
			`;
	}
	if( !font_excl_urls.includes(window.location.hostname) ) {
		mstyle = mstyle + `
			* {
				font: 18px sans-serif !important;
				font-weight: normal !important;
			}
		`;
	}
	if( window.location.hostname === "www.google.com" ) {
		mstyle = mstyle + `
			a {
				display: inline !important
			}
		`;
	}

	let mstsh = document.createElement("style");
	mstsh.innerText = mstyle;
	document.head.appendChild(mstsh);

	if( !bg_black_excl_urls.includes(window.location.hostname) ) {
		var elmnts = document.querySelectorAll("*:not(img)");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.setProperty("color", "white", "important");
			elmnts[i].style.setProperty("background", "black", "important");
		}
	}

}
