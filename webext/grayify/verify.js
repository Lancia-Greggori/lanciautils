function sleep(ms) {
	    return new Promise(resolve => setTimeout(resolve, ms));
}
for( let i = 0; i < 10; i++, sleep(500) ) {
	document.querySelector('html').style.setProperty("filter", "grayscale(100%)", "important");
}
