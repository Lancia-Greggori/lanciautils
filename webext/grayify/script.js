var styles = '* { filter: grayscale(100%); }'
//var styles = '* { filter: invert(1); }'
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
