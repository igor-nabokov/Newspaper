function burgerMenu () {
	var dropdown = document.getElementById("dropdown");
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
	} else {
		dropdown.style.display = "none";
	}
}

document.addEventListener (
	"DOMContentloaded", function () {
		var imgArr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
		console.log('1111');
		var slid = document.getElementById("image");
		slid.src = imgArr[0];
		var right = document.getElementById("rigthbutton");
		
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
	}
	)