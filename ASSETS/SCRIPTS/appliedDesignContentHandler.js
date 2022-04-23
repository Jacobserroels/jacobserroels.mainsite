// JavaScript Document
// Applied design content handler

var gridQuerey = sessionStorage.getItem('gridSetting');
var body = document.getElementsByTagName('body')[0];
var bodyText = document.createElement('p')
var gridToggle = document.createElement('a')
var bodyWrapper = document.createElement('div');
var buttonWrapper = document.createElement('div');
var portfoloioButton = document.createElement('a');

if(gridQuerey == null){
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids on";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	body.appendChild(buttonWrapper);
}
else if(gridQuerey == 0){
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids on";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	body.appendChild(buttonWrapper);
}
else if(gridQuerey == 1){
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids off";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	body.appendChild(buttonWrapper);
	
	
}