chrome.bookmarks.getChildren("58",
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
				'</a><p>&emsp;|&emsp;</p>';
		}
	}
);
