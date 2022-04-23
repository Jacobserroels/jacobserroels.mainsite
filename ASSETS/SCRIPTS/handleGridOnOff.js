// JavaScript Document

var gridOnOff = document.getElementById("gridButton");
var body = document.getElementsByTagName('body')[0];
var getPage = window.location.href;
console.log(getPage);

var gridQuerey = sessionStorage.getItem('gridSetting');

if(gridQuerey == 1){
	body.style.backgroundImage = "linear-gradient(to right, #D1CECB 1px, transparent 1px), linear-gradient(to bottom, #D1CECB 1px, transparent 1px)"
	body.style.backgroundSize = "40px 40px";
	}

if (getPage == "http://test.jacobserroels.com/applied-design") {
	gridOnOff.addEventListener("click", gridHandler);
}
else if (getPage != "http://test.jacobserroels.com/applied-design"){
	console.log('Not adding button')
}

function gridHandler(){
	if(gridQuerey == null){
		sessionStorage.setItem('gridSetting', 1);
		window.location.replace('http://test.jacobserroels.com');
	}
	else if(gridQuerey == 0){
		sessionStorage.setItem('gridSetting', 1);
		window.location.replace('http://test.jacobserroels.com');
	}
	else if(gridQuerey == 1){
		sessionStorage.setItem('gridSetting', 1);
	}
}