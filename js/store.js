function changeImg(clickId) {
	var oldimg = document.getElementById("titleimg").getAttribute("src");
	var nimg = document.getElementById(clickId).getAttribute("src");
	document.getElementById("titleimg").setAttribute("src", nimg);
	document.getElementById(clickId).setAttribute("src", oldimg);
}