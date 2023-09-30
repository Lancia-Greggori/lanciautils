chrome.bookmarks.getRecent(100, 
	function (bkmrkit) {
		let str = '';
		let title = '';
		for (let i = bkmrkit.length - 1; i >= 0; i--) {
			if (i > 0 &&
				bkmrkit[i].title === bkmrkit[i-1].title) continue;
			else if (!bkmrkit[i].title) title = bkmrkit[i].url;
			else title = bkmrkit[i].title;
			str = str + 
				'<a style="color: gray" href="' + 
				bkmrkit[i].url + '">' + title +
				'</a><p style="display: inline">&emsp;|&emsp;</p>';
		}
		document.getElementById('bkmrk').innerHTML = str;
	}
);
