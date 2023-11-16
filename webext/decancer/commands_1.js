browser.tabs.query(
	{currentWindow: true, active : true},
	function(tab) {
		browser.commands.onCommand.addListener(
			debugger;
			function(cmd) {
				if( cmd === "unhideimgs" ) {
					browser.scripting.executeScript({
						target: { tabId: tab[0].id },
						func: () => {
							var imgs = document.querySelectorAll("img");
							for( let i = 0; i < imgs.length; i++ ) {
								console.log( imgs[i].style );
							}

						}
					});
				}
			}
		);
	}
);
