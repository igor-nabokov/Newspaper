window.addEventListener("DOMContentLoaded", function () {

	var harm = document.getElementsByClassName("news-body");

	for (var i = 0; i < harm.length; i++) {
		harm[i].addEventListener("click", function (element) {
			if (!element.target.classList.contains('news-body')) {
				return;
			}
			for (var i = 0; i < harm.length; i++) {
				var list = harm[i].querySelector('.new-ul');
				if (list !=null) {
					list.style.display = "none";
				}
			}
			var list = element.target.querySelector('.new-ul');
			if (list !=null) {
				list.style.display = "block";
			}
		});
	};

$.get(
	"https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
	function (e) {
		//console.log(e.articles.length);
		var news = document.getElementById("harmonic");
		for (var index = 0; index < e.articles.length; index++) {
			//console.log(e.articles[index]);
		var newPNews = document.createElement('p');
			newPNews.style.display = "none";
		newPNews.innerHTML = e.articles[index].title + 
		'<br>' + e.articles[index].description +
		'<br> <img src="'+ e.articles[index].urlToImage +'" width="256" height="144">' + 
		'<br>' + '<hr>';
		news.appendChild(newPNews);
		}
	}
);

});