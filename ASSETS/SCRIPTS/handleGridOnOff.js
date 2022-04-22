// JavaScript Document

var gridOnOff = document.getElementById("gridButton");
var body = document.getElementsByTagName('body')[0];
var getPage = window.location.href;

var gridQuerey = sessionStorage.getItem('gridSetting');

if(gridQuerey == 1){
	body.style.backgroundImage = "linear-gradient(to right, var(--darkColor) 1px, transparent 1px), linear-gradient(to bottom, var(--darkColor) 1px, transparent 1px)"
	body.style.backgroundSize = "40px 40px";
	}

if (getPage == "test.jacobserroels.com/applied-design"); {
	gridOnOff.addEventListener("click", gridHandler);
}

function gridHandler(){
	if(gridQuerey == null){
		console.log('loading main page');
		sessionStorage.setItem('gridSetting', 1);
		window.location.assign = "http://test.jacobserroels.com";
	}
	else if(gridQuerey == 0){
		console.log('loading main page');
		sessionStorage.setItem('gridSetting', 1);
		window.location.assign = "http://test.jacobserroels.com";
	}
	
}