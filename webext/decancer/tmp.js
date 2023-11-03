var elmnts = document.querySelectorAll("*");

for( let i = 0; i < elmnts.length; i++ ) {
	console.log( elmnts[i].tagName );
	elmnts[i].style.setProperty("color", "inherit", "important");
}
