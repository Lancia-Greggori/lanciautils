document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');

var elmnt = document.querySelectorAll('*');
for( var i = 0; i < elmnt.length; i++ ) {
	if( elmnt[i].tagName === 'IMG' ) {
		elmnt[i].style.filter = 'invert(100%)';
		continue;
	}
	elmnt[i].style.setProperty('color', 'white', 'important');
	elmnt[i].style.setProperty('background', 'black', 'important');
	elmnt[i].style.setProperty('textDecoration', 'none', 'important');
	elmnt[i].style.setProperty('borderBottom', 'none', 'important');
}
