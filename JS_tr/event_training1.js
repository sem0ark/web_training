var x = document.getElementById("demo");
x=(x.childNodes)[0]
x.onclick = function () {
	x.innerHTML = Date();
}