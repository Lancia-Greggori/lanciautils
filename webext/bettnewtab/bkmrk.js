chrome.bookmarks.getRecent(100, 
	function (bkmrkit) {
		let str = "<h1>Even if you don't hit the ideal all the time, don't give up</h1>";
		let title = '';
		for (let i = 0; i < bkmrkit.length && i < 40; i++) {
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
