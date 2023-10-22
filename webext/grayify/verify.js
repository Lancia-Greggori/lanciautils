function sleep(ms) {
	    return new Promise(resolve => setTimeout(resolve, ms));
}
for( let i = 0; i < 100; i++, sleep(200) ) {
	document.querySelector('html').style.setProperty("filter", "grayscale(100%)", "important");
}
