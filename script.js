function burgerMenu () {
	var dropdown = document.getElementById("dropdown");
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
	} else {
		dropdown.style.display = "none";
	}
}

window.addEventListener("DOMContentLoaded", function () {
	var imgArr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
	var slid = document.getElementById("image");
	slid.src = imgArr[0];
	var right = document.getElementById("rightbutton");
		
	var left = document.getElementById("leftbutton");
	right.addEventListener('click', next, false);
		
	left.addEventListener('click', prev, false);
	i=0;
	function next () {
		if (i==2) {i=0} else {i++}
		slid.src = imgArr[i];
	}
	
	function prev () {
		if (i == 0) {i=2}
		else {i--}
		slid.src = imgArr[i];
	}
});

window.addEventListener("DOMContentLoaded", function () {
	var imgArr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
	var slid = document.getElementById("image");
	slid.src = imgArr[0];
	var right = document.getElementById("right-button");
		
	var left = document.getElementById("left-button");
	right.addEventListener('click', next, false);
		
	left.addEventListener('click', prev, false);
	i=0;
	function next () {
		if (i==2) {i=0} else {i++}
		slid.src = imgArr[i];
	}
	
	function prev () {
		if (i == 0) {i=2}
		else {i--}
		slid.src = imgArr[i];
	}
});


function signUp () {
	var su = document.getElementById("great-div");
	su.style.display = "block";
}

function signIn () {
	var si = document.getElementById("great-div-2");
	si.style.display = "block";
}

function close1() {
	var closeGD = document.getElementById("great-div");
	closeGD.style.display = "none";
}

function close2 () {
	var closeG = document.getElementById("great-div-2");
	closeG.style.display = "none";
}


function closeDiv (elem) {
	elem.style.display = "none";
}

function closeDiv2 (elem) {
	elem.style.display = "none";
}

$.get(
  	"https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
  	function (e) {
  	
  		var news = document.getElementById("newsAll");

  		

	for (var i = 0; i < e.articles.length; i++) {
		console.log(e.articles[i]);


		var newDivNews = document.createElement('div');
  		newDivNews.innerHTML = e.articles[i].title + '<br>' + e.articles[i].description +
'<br> <img src="'+ e.articles[i].urlToImage +'" width="256" height="144">' + 
'<br>' + e.articles[i].url + '<hr>';
		news.appendChild(newDivNews);
   }

 });