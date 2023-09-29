chrome.history.search( { text: '' }, function (histit) {
		let str = "<h1>Even if you don't hit the ideal all the time, don't give up</h1>";
		let title = '';
		for (let i = 0, e = 0; i < histit.length && i < 40; i++) {
			if (i > 0 &&
				histit[i].title === histit[i-1].title) continue;
			else if (!histit[i].title) title = histit[i].url;
			else title = histit[i].title;
			str = str + 
				'<a style="color: gray" href="' + 
				histit[i].url + '">' + title +
				'</a><p style="display: inline">&emsp;|&emsp;</p>';
		}
		document.body.innerHTML = str;
	}
);
