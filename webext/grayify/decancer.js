document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');

var elmnt = document.querySelectorAll('*');
for (var i = 0; i < elmnt.length; i++) {
	elmnt[i].style.color = "black";  
	elmnt[i].style.background = "black";  
}

const tags = {
	a: 'a',
	p: 'p',
	u: 'u',
	h: 'h',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	strong: 'strong',
	code: 'code',
	div: 'div',
	input: 'input',
	span: 'span'
};
for (const tag in tags) {
	var elmnt = document.getElementsByTagName(tag);
	for (var i = 0; i < elmnt.length; i++) {
		elmnt[i].style.color = "white";
		elmnt[i].style.textDecoration = "none";
		elmnt[i].style.borderBottom = "none";
	}
}
