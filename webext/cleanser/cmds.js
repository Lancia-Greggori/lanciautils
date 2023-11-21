browser.commands.onCommand.addListener( function(cmd) {
	if( cmd === "unhide-visual-media" ) {
		browser.tabs.executeScript({
			code: `
				elmnts = document.
					querySelectorAll("img, svg, audio, video");
				for( let i = 0; i < elmnts.length; i++ ) {
					elmnts[i].style.
						setProperty("display", "inline",
						"important");
				}
			`
		});
	} else if ( cmd === "invert-imgs" ) {
		browser.tabs.executeScript({
			code: `
				imgs = document.
					querySelectorAll("img");
				for( let i = 0; i < imgs.length; i++ ) {
					imgs[i].style.
						setProperty("filter", "invert(0)",
						"important");
				}
			`
		});
	}
}
);
