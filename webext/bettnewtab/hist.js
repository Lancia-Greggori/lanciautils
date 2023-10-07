chrome.history.search( { text: '' },
	function (histit) {
		let title = '';
		for (let i = 0, max = 20; 
			i < histit.length && i < max; i++) {
				if (i > 0 &&
					histit[i].title === histit[i-1].title) {
						max++;
						continue;
				} else if (!histit[i].title) title = histit[i].url;
				else title = histit[i].title;
				document.getElementById('hist').innerHTML +=
					'<a style="color: gray" href="' +
					histit[i].url + '">' + title +
					'</a><br>';
		}
	}
);
