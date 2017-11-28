window.addEventListener("DOMContentLoaded", function () {
	function burgerMenu () {
		var dropdown = document.getElementById("dropdown");
		if (dropdown.style.display === "none") {
			dropdown.style.display = "block";
		} else {
			dropdown.style.display = "none";
		}
	}

	var burgerMenuBtn = document.getElementById("burgerMenuBtn");
	burgerMenuBtn.addEventListener('click', burgerMenu, false);

	var imgArr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
	var slid = document.getElementById("image");
	slid.src = imgArr[0];
	var right = document.getElementById("rightbutton");
		
	var left = document.getElementById("leftbutton");
	right.addEventListener('click', next, false);
	left.addEventListener('click', prev, false);
	var index = 0;
	function next () {
		if (index >= 2) {index = 0} else {index++}
		slid.src = imgArr[index];
	}
	
	function prev () {
		if (index <= 0) {index=2}
		else {index--}
		slid.src = imgArr[index];
	}

	var right1 = document.getElementById("right-button");
	var left1 = document.getElementById("left-button");
	right1.addEventListener('click', next1, false);
	left1.addEventListener('click', prev1, false);
	function next1 () {
		if (index>=2) {index=0} else {index++}
		slid.src = imgArr[index];
	}
	
	function prev1 () {
		if (index <= 0) {index=2}
		else {index--}
		slid.src = imgArr[index];
	}

	$.get(
	  	"https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
	  	function (e) {
	  		var news = document.getElementById("newsAll");
		for (var i = 0; i < e.articles.length; i++) {
			var newDivNews = document.createElement('div');
	  		newDivNews.innerHTML = e.articles[i].title + '<br>' + e.articles[i].description +
	'<br> <img src="'+ e.articles[i].urlToImage +'" width="256" height="144">' + 
	'<br>' + e.articles[i].url + '<hr>';
			news.appendChild(newDivNews);
	   }
	 });

	var harm = document.getElementsByClassName("harmonic");
		//console.log(harm);
	for (var i = 0; i < harm.length; i++) {
		//console.log(harm[i]);
		harm[i].addEventListener("click", function (element) {
			if (!element.target.classList.contains('harmonic')) {
				return;
			}
			for (var i = 0; i < harm.length; i++) {
				//console.log(harm);
				var list = harm[i].querySelector('ul');
				if (list !=null) {
					list.style.display = "none";
				}
			}
			var list = element.target.querySelector('ul');
			//console.log(element.target);
			if (list !=null) {
				list.style.display = "block";
			}
		});
	};

	//сюда дальше писать весь код, который выполняется при загрузке документа
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