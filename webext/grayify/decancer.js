document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');

const exclurls = [
	'web.whatsapp.com',
	'web.telegram.org',
	'app.element.io',
	'www.youtube.com'
];

if( ! exclurls.includes(window.location.hostname) ) {
	let mstyle = `
		*:not(img) {
				color: white !important;
				background: black !important;
				text-decoration: none !important;
				border-bottom: none !important
		}

		img { filter: invert(100%); }
	`;

	let mstsh = document.createElement('style');
	mstsh.innerText = mstyle;
	document.head.appendChild(mstsh);
}
