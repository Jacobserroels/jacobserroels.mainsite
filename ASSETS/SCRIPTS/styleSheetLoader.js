// Loading CSS From Aspect
var aspect = 0

window.addEventListener('resize', loadCSS);

function loadCSS(){
	var oldSheetTag = document.getElementsByTagName('link');
	oldSheetTag.getAttribute('src=')
//	oldSheet.parentElement.removeChild(oldSheet);
	var height = window.screen.height
	var width = window.screen.width
	if (width >= height){
		aspect = width/height;
		console.log(aspect);
		if (aspect <= 1.59){
			document.head.append('<link rel="stylesheet" type="text/css" href="STYLESHEETS/desktop-style.css">');
		}
		else if (aspect <= 1){
			document.head.append('<link rel="stylesheet" type="text/css" href="STYLESHEETS/STYLESHEETS/tablet-style.css">');
		}
		else {
			document.head.append('<link rel="stylesheet" type="STYLESHEETS/mobile-style.css">');
		}
	}
	else if (width < height){
		aspect = height/width;
		console.log(aspect);
		document.head.appendChild('<link rel="stylesheet" type="STYLESHEETS/mobile-style.css">');
	}
	else{return}
	aspect = 0;
}