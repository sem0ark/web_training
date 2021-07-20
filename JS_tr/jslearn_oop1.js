// 4 pillars --> encapsulation, abstraction, inheritance, polymorphism

//theese objects declared using only JS, not ECMAScript6 (without 'class' or 'constructor')
//         basic object
const circle1 = {
    rad: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
};

//circle.draw()

//         facories

function createCircle(radius){
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
};

// const circle2 = createCircle(2);

//         constructor

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
};

// const circle3 = new Circle(4);

//         constructor properties

//there is some built in constructors
// let x = new String();
// let x = new Boolean();
// let x = new Number();

//         functions are objects

// console.log(Circle.name);
// console.log(Circle.lenght);

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function () {
    console.log('draw');
};`
);

// const circle4 = new Circle1(8);
// they are the same V ^ VV
// const circle5 = Circle1.call({}, 10);
// const circle5 = Circle1.apply({}, [10]); //needs ARRAY of args
// console.log(circle4);





//         value vs reference type

// Number     Object
// String     Function
// Boolean    Array
// Symbol
// undefined
// null

let x = 10;
let y = x;
x = 20;// x and y are independent (x=20 and y=10)

let x1 = {val: 10};
let y1 = x1;
x1.val = 20;// x1 and y1 are NOT independent (x.val=20 and y.val=20)

// !!!PRIMITIVES ARE COPIED BY THEIR VALUE!!!
// !!!OBJECTS ARE COPIED BY THEIR REFERENCE!!!

let num = 10;
function increase(number) { number++; };
increase(num);
// console.log(num);// 10


let obj = { val: 10 };
function increase1(object) { object.val++; };
//! different variiables pointin at the same object !
increase(obj);
//console.log(obj);// { val: 11 }

//         adding and removing properties

function Circle2(radius) {
    this.radius = radius;
};

const circle31 = new Circle2(4);

// we can add extra properties withou whenever we need them

circle31.location = { x: 1, y: 1 };
// they are the same V ^
circle31['location'] = { x: 1, y: 1 };

// delete circle31.location;
// they are the same V ^
// delete circle31['location']


//         iterating properties

for (let key in circle31){
    // console.log(key, circle31[key]);
};
// if not methods
for (let key in circle31) {
    if (typeof circle31 !== 'function') {
        console.log(key, circle31[key]);
    };
};

const keys = Object.keys(circle31);
// return all keys as an array

if ('radius' in circle31){
    console.log('circle has radius')
};// check of the exsting of property



//         abstraction
// hide the details ; show only the essentials

//example V (we want hide not public methods and properties)---> use "let"
function Circle5(radius) {
    this.radius = radius;

    let deflocation = { x: 1, y:1 };//can be seen only in parent function Circle and its methods
    let comutedeflocation = function(){
        //...
    };
    this.draw = function () {
        comutedeflocation(0.1);

        console.log('draw');
    };
};


//         getters and setters

function Circle6(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 1 };//can be seen only in parent function Circle and its methods
    let comutedeflocation = function () {
        //...
    };

    this.draw = function () {
        comutedeflocation(0.1);

        console.log('draw');
    };
    //we can use functions
    //this.getDefaultLocation = function(){ return deflocation };

    // or special methods
    Object.defineProperty(this,'defaultLocation',{
        //V it`s getter
        get: function(){
            return defaultLocation;
        },
        //V it`s getter
        set: function(value){
            if (!value.x || !value.y){//it checks if we have x and y
                throw new Error('Invalid location.');
            };
            defaultLocation = value;
        }
    });
};

//exsersise
function Stopwatch() {

    this.duration = 0;

    let started = false;
    let startTime = 0;
    let stopTime = 0;

    this.start = function() {
        if (started){
            throw new Error('Stopwatch has already started');
        };

        startTime = new Date().getTime();
        started = true;
    };

    this.stop = function() {
        if (!started){
            throw new Error('Stopwatch as not started');
        };

        stopTime = new Date().getTime();
        started = false;
        this.duration = (stopTime - startTime) / 1000;
    };

    this.reset = function() {
        this.duration = 0;

        started = false;
        startTime = 0;
        stopTime = 0;
    };
};