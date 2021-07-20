let arr = document.getElementsByClassName('selected');
for (let v of arr){
	v.onclick=(() => {alert('while true:'+v.innerHTML)});
};
arr.forEach(v=>{console.log(v.innerHTML)})