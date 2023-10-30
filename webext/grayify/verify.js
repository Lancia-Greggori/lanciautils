document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');

var elmnt = document.querySelectorAll('*');
for (var i = 0; i < elmnt.length; i++) {
	elmnt[i].style.color = 'black';
	elmnt[i].style.background = 'black';
}

const tags = {
	a: 'a',
	p: 'p',
	u: 'u',
	i: 'i',
	b: 'b',
	h: 'h',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	em: 'em',
	th: 'th',
	td: 'td',
	dd: 'dd',
	dt: 'dt',
	li: 'li',
	mi: 'mi',
	mn: 'mn',
	mo: 'mo',
	mrow: 'mrow',
	msub: 'msub',
	mtable: 'mtable',
	mtd: 'mtd',
	mtr: 'mtr',
	bdi: 'bdi',
	sup: 'sup',
	pre: 'pre',
	strong: 'strong',
	figcaption: 'figcaption',
	textarea: 'textarea',
	code: 'code',
	div: 'div',
	input: 'input',
	cite: 'cite',
	span: 'span'
};
for (const tag in tags) {
	var elmnt = document.getElementsByTagName(tag);
	for (var i = 0; i < elmnt.length; i++) {
		elmnt[i].style.color = 'white';
		elmnt[i].style.textDecoration = 'none';
		elmnt[i].style.borderBottom = 'none';
	}
}

var elmnt = document.getElementsByTagName('img');
for (var i = 0; i < elmnt.length; i++) {
	elmnt[i].style.background = 'white';
}
