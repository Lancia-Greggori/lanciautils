var uvm =`
	elmnts = document.
		querySelectorAll("img, svg, audio, video");
	for( let i = 0; i < elmnts.length; i++ ) {
		elmnts[i].style.
			setProperty("display", "inline",
			"important");
	}
`;

var invimgs = `
	imgs = document.
		querySelectorAll("img");
	for( let i = 0; i < imgs.length; i++ ) {
		imgs[i].style.
			setProperty("filter", "invert(0)",
			"important");
	}
`;

var wsfix = `
	txt = document.
		querySelectorAll("p, pre, code");
	for( let i = 0; i < txt.length; i++ ) {
		txt[i].style.
			setProperty("white-space", "pre-wrap",
			"important");
	}
`;

var code;

browser.commands.onCommand.addListener(
	function(cmd) {
		switch(cmd) {
			case "uvm":
				code = uvm;
				break;
			case "invimgs":
				code = invimgs;
				break;
			case "wsfix":
				code = wsfix;
				break;
			default:
				return;
		}
		browser.tabs.executeScript({
			code: code
		});
	}
);
