var scrollButtonLeft = document.getElementById("scrollButtonLeft");
var scrollButtonRight = document.getElementById("scrollButtonRight");
var cardWrap = document.getElementById("cardWrapper");
var cardElement = document.getElementById("contentItem")
var bar = document.getElementById("scrollBar");

var scrollPos = 0;

cardWrap.addEventListener("scroll", isScrolling);
scrollButtonLeft.addEventListener('click', scrollLeft)
scrollButtonRight.addEventListener('click', scrollRight)

function isScrolling () {
	scrollPos = cardWrap.scrollLeft;
	moveBar(scrollPos);
}

function moveBar(scrollPos) {
	var divWidth = cardWrap.clientWidth;
	var scrollPosNormal = Math.min(Math.max(scrollPos/5, 0), 100);
	var scrollPosCalc = scrollPos*360 /divWidth;
	bar.style.backgroundPosition = scrollPosNormal+"%";
	console.log(scrollPos)
}

function scrollLeft(){
	cardWrap.scrollLeft -= cardWrap.clientWidth*0.35;
}

function scrollRight(){
	cardWrap.scrollLeft += cardWrap.clientWidth*0.35;
}