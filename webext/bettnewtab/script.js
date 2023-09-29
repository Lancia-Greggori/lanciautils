chrome.history.search( { text: '' }, function (histit) {
		let str = "<h1>Even if you don't hit the ideal all the time, don't give up</h1>";
		for (let i = 0, e = 0, d = 2; i < 40; i++) {
			if (i > 0 &&
				histit[i].title === histit[i-1].title) continue;
			str = str + 
				'<a style="color: gray" href="' + 
				histit[i].url + '">' +
				histit[i].title;
			if (e == 1 || histit[i].title.length > 30) {
				str = str + '</a><br>';
				e = 0;
			} else {
				str = str + 
					'</a><p style="display: inline">&emsp;|&emsp;</p>';
				e++;
			}
		}
		document.body.innerHTML = str;
	}
);
