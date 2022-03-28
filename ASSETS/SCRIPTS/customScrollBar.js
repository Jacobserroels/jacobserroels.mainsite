var cardWrap = document.getElementById("cardWrapper");
var bar = document.getElementById("scrollBar");

var scrollPos = 0;

cardWrap.addEventListener("scroll", isScrolling);

function isScrolling () {
	var scrollPos = cardWrap.scrollLeft;
	requestAnimationFrame(moveBar(scrollPos));
}

function moveBar(scrollPos) {
	var divWidth = cardWrap.clientWidth;
	var scrollPosNormal = Math.min(Math.max(scrollPos/5, 0), 100);
	bar.style.backgroundPosition = scrollPosNormal+"%";
}