browser.commands.onCommand.addListener(
	function(cmd) {
		if( cmd === "unhideimgs" ) {
			 browser.tabs.executeScript({
			 	code: `
				 		imgs = document.querySelectorAll("img");
						for( let i = 0; i < imgs.length; i++ ) {
							imgs[i].style.setProperty("display", "inline", "important");
						}
				`
			});
		}
	}
);
