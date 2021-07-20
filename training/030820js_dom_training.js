// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document); // print all properties
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.all); // all html elemnts on the page as HTMLCollection(supports only indexing)
// console.log(document.head); // get head elements

// console.log(document.links); // all links
// console.log(document.forms); // all forms
// console.log(document.images); // all forms

// Selectors
// by id //

// let a = document.getElementById('header-title');
// let b = document.getElementById('main-header');
// console.log(a);
// a.textContent = 'Hello'; // dont pays attention to style like display:none
// a.innerText = 'World'; // pays attention to style
// a.innerHTML = '<h3>Hello</h3>'; // puts html into element
// b.style.borderBottom = 'solid 3px black';

// by class name //
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = '700';
// items[1].style.backgroundColor = 'purple';

// // for all
// for (i of items) {
//     i.style.backgroundColor = '#f4f4f4'
// };

// by tag name //

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[1]);
// lis[1].textContent = 'Hello2';
// lis[1].style.fontWeight = '700';
// lis[1].style.backgroundColor = 'purple';

// // for all
// for (i of lis) {
//     i.style.backgroundColor = '#f4f4f4'
// };


// QUERYSELECTOR (uses css selectors (kind of JQuery))//

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #565656';

// let input = document.querySelector('input'); // grab sonly first 
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// queryselectorall //

// let titles = document.querySelectorAll('.title'); // return nodelist (support array methods)
// console.log(titles);
// titles[0].textContent = 'hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (i of odd) {
//     i.style.backgroundColor = 'lightgray';
// };

// for (i of even) {
//     i.style.backgroundColor = 'darkgray';
// };


// Traversing the DOM //
// let itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode); // div
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode); // container
// console.log(itemList.parentNode.parentNode.parentNode); // body

// parentElement
// console.log(itemList.parentElement); // div
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement); // container
// console.log(itemList.parentElement.parentElement.parentElement); // body


// childNodes
// console.log(itemList.childNodes); // returns all nodes in parenthtml as NodeList
// console.log(itemList.children); // returns just elements (dont adds linebrakes) as HTMLCollection
// itemList.children[1].style.backgroundColor = 'yellow';

// first child
// console.log(itemList.firstChild); // includes all linebrakes

// first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'yellow';

// last child
// console.log(itemList.lastChild); // includes all linebrakes

// last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = 'green';

// nextSibling (next element of the same parent), if nothing returns null
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling(previous element of the same parent), if nothing returns null
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // crateElement

// // create a div

// let newDiv = document.createElement('div');
// // add class
// newDiv.className = 'Hello';
// // add id
// newDiv.id = 'hello1';
// // add attr
// newDiv.setAttribute('title', 'HelloDiv');
// //create text node
// let newDivText = document.createTextNode('Hello World');
// // add text to a div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS //

// document.getElementById('button').addEventListener
//     ('click', () => {
//         console.log(123);
//     });

// const buttonClick = (e) => {
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#header-title').style.color = '#000';

//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList); // return DOMTokenList
//     // output.innerHTML = '<h3>' + e.target.id + '<h3>';

//     // console.log(e.type);

//     // console.log(e.clientX, e.clientY);
//     // console.log(e.offsetX, e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shifttKey);
// };
// let output = document.getElementById('output');
// let button = document.getElementById('button');
// let box = document.getElementById('box_1');
// let select = document.querySelector('select');
// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// button.addEventListener('dblclick', runEvent);
// button.addEventListener('click', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('input', runEvent);

// itemInput.addEventListener('change', runEvent);
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();

//     console.log('EVENT TYPE: ' + e.type);

//     // console.log(e.target.value);
//     output.innerHTML = '<h3>' + e.target.value + '</h3>';
//     // output.innerHTML = `<h3>MouseX: ${e.offsetX};MouseY: ${e.offsetY}</h3>`;

//     // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// };


// SMALL PROJECT //

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// form submit event

form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('text_box_1').value;
    if (newItem != '') {
        // get input value
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = newItem;
        // create button
        let button = document.createElement('button');
        button.className = "btn btn-danger btn-sm float-right delete";
        button.appendChild(document.createTextNode('X'));
        button.addEventListener('click', removeItem);
        li.appendChild(button);
        itemList.appendChild(li);
        document.getElementById('text_box_1').value = '';
    } else {
        let div = document.getElementById('err');
        div.innerText = 'Please, enter name of item';
        div.classList.add('error');
        setTimeout(() => {
            div.innerText = '';
            div.classList.remove('error');
        }, 1000);
    };

};

// item remove
function removeItem(e) {
    itemList.removeChild(e.target.parentNode);
};

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e) {
//     e.preventDefault();

//     // Get input value
//     var newItem = document.getElementById('text_box_1').value;

//     // Create new li element
//     var li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item';
//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem));

//     // Create del button element
//     var deleteBtn = document.createElement('button');

//     // Add classes to del button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//     // Append text node
//     deleteBtn.appendChild(document.createTextNode('X'));

//     // Append button to li
//     li.appendChild(deleteBtn);

//     // Append li to list
//     itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are You Sure?')) {
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}