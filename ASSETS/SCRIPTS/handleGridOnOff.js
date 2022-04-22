// JavaScript Document

var gridOnOff = document.getElementById("gridButton");
var head = document.getElementsByTagName('head')[0];

localStorage.setItem('gridSetting',0)
var gridQuerey = localStorage.getItem('gridSetting')


gridOnOff.addEventListener("click", gridHandler);

if(gridQuerey == 1){
		var cssGrid = document.createElement('link');
		cssGrid.rel = "stylesheet";
		cssGrid.href = 'STYLESHEETS/grid-css.css';
		head.appendChild(cssGrid);
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