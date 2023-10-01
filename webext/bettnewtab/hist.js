chrome.history.search( { text: '' }, 
	function (histit) {
		let title = '';
		for (let i = 0; i < histit.length && i < 10; i++) {
			if (i > 0 &&
				histit[i].title === histit[i-1].title) continue;
			else if (!histit[i].title) title = histit[i].url;
			else title = histit[i].title;
			document.getElementById('hist').innerHTML +=
				'<a style="color: gray" href="' + 
				histit[i].url + '">' + title +
				'</a><br>';
		}
	}
);
