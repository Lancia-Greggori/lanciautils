chrome.history.search( { text: '' }, 
	function (histit) {
		let str = '';
		let title = '';
		for (let i = 0; i < histit.length && i < 40; i++) {
			if (i > 0 &&
				histit[i].title === histit[i-1].title) continue;
			else if (!histit[i].title) title = histit[i].url;
			else title = histit[i].title;
			str = str + 
				'<a style="color: gray" href="' + 
				histit[i].url + '">' + title +
				'</a><p style="display: inline">&emsp;|&emsp;</p>';
		}
		document.getElementById('hist').innerHTML = str;
	}
);
