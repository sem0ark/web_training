
//Array object

// creation 1
var courses = new Array("HTML", "CSS", "JS");

//creation 2
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

//creation 3
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

//creation 4
var courses = ["HTML", "CSS", "JS"]; 

//assign
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element

//index over borders
document.write(courses[10]);
//Outputs "undefined"

