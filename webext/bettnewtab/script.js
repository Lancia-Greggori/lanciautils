chrome.history.search( { text: '' }, function (histit) {
	let str = "<h1>Even if you don't hit the ideal all the time, don't give up</h1>";
		for (let i = 0; i < 20; i++) {
			str = str + 
				'<a style="color: gray" href="' + 
				histit[i].url + '">' +
				histit[i].title + '</a><br>';
		}
	document.body.innerHTML = str;
	}
);
