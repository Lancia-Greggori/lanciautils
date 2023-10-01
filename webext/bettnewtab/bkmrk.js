chrome.bookmarks.search("main",
	function (main) {
		chrome.bookmarks.getChildren(main[0].id,
			function (bkmrkit) {
				let title = '';
				for (let i = 0; i < bkmrkit.length; i++) {
					if (i > 0 &&
						bkmrkit[i].title === bkmrkit[i-1].title) continue;
					else if (!bkmrkit[i].title) title = bkmrkit[i].url;
					else title = bkmrkit[i].title;
					document.getElementById('bkmrk').innerHTML +=
						'<a style="color: gray" href="' +
						bkmrkit[i].url + '">' + title +
						'</a><p style="display: inline">&emsp;|&emsp;</p>';
				}
			}
		);
	}
);
