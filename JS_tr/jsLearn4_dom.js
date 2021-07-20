//finds element by id
//document.getElementById(id) 

//finds elements by class name
//document.getElementsByClassName(name) 

//finds elements by tag name
//document.getElementsByTagName(name)

var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
	console.log(arr[x].innerHTML)
    arr[x].innerHTML = "Hi there";
}
console.log('#######################')
var a = document.getElementById("demo");
var arr1 = a.childNodes;
for(var x=0;x<arr1.length;x++) {
	console.log(arr1[x].innerHTML,arr.length)
	arr1[x].innerHTML = "new text";
}
//link change

// <a href="http://www.example.com">Some link</a>
// var el = document.getElementsByTagName("a");
// el[0].href = "http://www.sololearn.com";

//value change

// <img id="myimg" src="orange.png" alt="" />
// var el = document.getElementById("myimg");
// el.src = "apple.png";

//style change

// <div id="demo" style="width:200px">some text</div>
// var x = document.getElementById("demo");
// x.style.color = "6600FF";
// x.style.width = "100px";

//element removement

// <div id="demo">
// <p id="p1">This is a paragraph.</p>
// <p id="p2">This is another paragraph.</p>
// </div>
// <script>
// var parent = document.getElementById("demo");
// var child = document.getElementById("p1");
// parent.removeChild(child);
// </script>

//element creation

/* 
<div id ="demo">some content</div>

<script>
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);
</script> */

//element replacing

/* 
<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
</script> */

/* 
!!!!!!!
Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.
!!!!!!!
<html>
  <body>
    <div id ="demo">
      <p>some text</p>
      <p>some other text</p>
    </div>

    <script>
     var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
    </script>

  </body>
</html> */