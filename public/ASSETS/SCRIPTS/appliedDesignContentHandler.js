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
	bodyText.innerHTML = "design is art applied to a problem, when you subject that art to guides, formulas, and overbearing systems it becomes stale, it looses it's artistic roots and becomes disconnected from the people it is meant to help.<br><br>with that in mind, this website was designed without a grid or system in mind, but instead was designed around a feel and with the consumers of the website in mind.<br><br>did you notice? was it obvious that the placement of objects was more intentional than snapping items to a grid. if not, go back and look at it again with guides enabled.<br><br>"
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids on";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	bodyWrapper.appendChild(buttonWrapper);
}
else if(gridQuerey == 0){
	bodyText.innerHTML = "design is art applied to a problem, when you subject that art to guides, formulas, and overbearing systems it becomes stale, it looses it's artistic roots and becomes disconnected from the people it is meant to help.<br><br>with that in mind, this website was designed without a grid or system in mind, but instead was designed around a feel and with the consumers of the website in mind.<br><br>did you notice? was it obvious that the placement of objects was more intentional than snapping items to a grid. if not, go back and look at it again with guides enabled.<br><br>"
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids on";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	bodyWrapper.appendChild(buttonWrapper);
}
else if(gridQuerey == 1){
	bodyText.innerHTML = "If the changes weren't obvious to you, I would consider choosing me to do you design,<br><br>to see more of my work, click the continue to portfolio button <br><br>";
	
	gridToggle.setAttribute('id','gridButton');
	gridToggle.innerHTML = "view again with grids off";
	bodyText.appendChild(gridToggle);
	
	bodyWrapper.setAttribute('id','pageThreeBody');
	bodyWrapper.appendChild(bodyText);
	body.appendChild(bodyWrapper);
	
	portfoloioButton.href = 'portfolio';
	portfoloioButton.innerHTML = "continue to portfolio";
	buttonWrapper.appendChild(portfoloioButton);
	bodyWrapper.appendChild(buttonWrapper);
	
	
}
