// Script for handling first time visitors



localStorage.setItem('hasVisted',0)
var firstVisitQuerey = localStorage.getItem('hasVisted')

if (firstVisitQuerey == null){
	firstVisitQuerey = localStorage.setItem('hasVisted',1)
	window.location = "http://test.jacobserroels.com";
} else if (firstVisitQuerey == 0) {
	firstVisitQuerey = localStorage.setItem('hasVisted',1)
	window.location = "http://test.jacobserroels.com";
	}