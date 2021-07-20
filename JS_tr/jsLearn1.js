var a = true;
var b = true;
if (a){
	document.write('<br/>a-true');
}else if (b){
	document.write('<br/>b-true');
}else {
	document.write('<br/>a-false');
}

var color ="orange";
switch(color) {
   case "blue": 
     document.write("<br/>This is blue.");
     break;
   case "red": 
     document.write("<br/>This is red.");
     break;
   case "green": 
     document.write("<br/>This is green."); 
     break;
   case "orange": 
      document.write("<br/>This is orange."); 
      break;
   default: 
      document.write("<br/>Color not found.");
}

for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}

var i=0;
while (i<=10) {
   document.write("__"+ i + "<br />");
   i++;
}

var i=20;
do {  
  document.write("____"+i + "<br />");
  i++;  
}
while (i<=25); 

for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
   document.write(i + "<br />");
}

function addNumbers(a, b) {
   var c = a+b;
   return c;
}

alert("Do you really want to leave this page?");
var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}