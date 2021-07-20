var pos=0;
var box=document.getElementById('box');
var t=setInterval(move);
function move(){
	if (pos>=350){
		clearInterval(t);
	}else{
		pos+=1;
		box.style.left=pos+'px';
	}
}
function change() {
	var x = document.getElementById("name");
	x.value= x.value.toLowerCase();
}