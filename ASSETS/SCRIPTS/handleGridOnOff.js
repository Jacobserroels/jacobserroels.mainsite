// JavaScript Document

var gridOnOff = document.getElementById("gridButton");
var body = document.getElementsByTagName('body')[0];

var gridQuerey = localStorage.getItem('gridSetting');
var firstVisit = localStorage.getItem('hasVisted');


gridOnOff.addEventListener("click", gridHandler);

if(gridQuerey == 1){
	body.style.backgroundImage = "linear-gradient(to right, var(--darkColor) 1px, transparent 1px), linear-gradient(to bottom, var(--darkColor) 1px, transparent 1px)"
	body.style.backgroundSize = "40px 40px";
	}
if(firstVisit == null){
	localStorage.setItem('gridSetting', 0);
}
else if(firstVisit == 0){
	localStorage.setItem('gridSetting', 0);
}

function gridHandler(){
	if(gridQuerey == null){
		console.log('loading main page');
		localStorage.setItem('gridSetting', 1);
		window.location = "http://test.jacobserroels.com";
	}
	else if(gridQuerey == 0){
		console.log('loading main page');
		localStorage.setItem('gridSetting', 1);
		window.location = "http://test.jacobserroels.com";
	}
	
}