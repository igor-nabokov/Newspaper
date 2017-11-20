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