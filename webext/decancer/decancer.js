const hostname = window.location.hostname;
const url = window.location.href;
const hts = document.querySelector("html").style;
var contains_math = false;

if( hostname === "www.desmos.com" ) {

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

	var scripts = document.querySelectorAll("script");
	for( let i = 0; i < scripts.length; i++ ) {
		if( scripts[i].type.includes("math")  ) {
			contains_math = true;
			break;
		}
	}

	if( !bg_black_excl_urls.includes(hostname) &&
		!contains_math ) {
			mstyle = mstyle + `
				*:not(img) {
					background: black !important;
				}
			`;
	}
	if( !font_excl_urls.includes(hostname) &&
		!contains_math ) {
		mstyle = mstyle + `
			* {
				font: 20px sans-serif !important;
				font-weight: normal !important;
			}
		`;
	}
	if( !transform_excl_urls.includes(hostname) ) {
		mstyle = mstyle + `
			* {
				transform: none !important;
			}
		`;
	}
	if( hostname === "www.google.com" &&
		url.includes("tbm=isch") ) {
		mstyle = mstyle + `
			a {
				display: inline !important;
			}
		`;
	} else {
		mstyle = mstyle + `
			img:not([class*="math" i],
					[src*="math" i]) {
						display: none !important;
			}
		`;
	}
	if( hostname.includes("wikipedia.org") ) {
		mstyle = mstyle + `
			.vector-feature-zebra-design-disabled
			#vector-toc-pinned-container
			.vector-toc::after {
					background: black !important
			}
			audio,video {
				display: none !important;
			}
		`;
	}


	let mstsh = document.createElement("style");
	mstsh.innerText = mstyle;
	document.head.appendChild(mstsh);

	if( !bg_black_excl_urls.includes(hostname) ) {
		var elmnts = document.querySelectorAll("*:not(img)");
		for( let i = 0; i < elmnts.length; i++ ) {
			elmnts[i].style.setProperty("color", "white", "important");
			elmnts[i].style.setProperty("background", "black", "important");
		}
	}
	if( !font_excl_urls.includes(hostname) &&
		!contains_math ) {
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
