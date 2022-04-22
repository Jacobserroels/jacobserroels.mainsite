//Script for handling first time visitors



var firstVisitQuerey = localStorage.getItem('hasVisted');

if (firstVisitQuerey == null){
	localStorage.setItem('hasVisted',1);
	window.location.replace('http://test.jacobserroels.com');
} else if (firstVisitQuerey == 0) {
	localStorage.setItem('hasVisted',1);
	window.location.replace('http://test.jacobserroels.com');
	}
else if (firstVisitQuerey == 1){
	localStorage.setItem('hasVisted',1);
}