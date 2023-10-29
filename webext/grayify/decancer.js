document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');

const tags = { a: 'a', p: 'p', u: 'u', div: 'div', input: 'input', span: 'span' };
for (const tag in tags) {
	var elmnt = document.getElementsByTagName(tag);
	for (var i = 0; i < elmnt.length; i++) {
		elmnt[i].style.color = "white";
		elmnt[i].style.textDecoration = "none";
		elmnt[i].style.borderBottom = "none";
	}
}
