// higher order functions and arrays
// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// FOR-LOOP
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// };
// needs callback function(element, index(if need), array(if need))
// companies.forEach(function (company) {
//     console.log(company.name);
// });

// FILTER
// get 21 and older
// let filtered = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         filtered.push(ages[i]);
//     };
// };
// let filtered = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     };
// });
// let filtered = ages.filter((age) => age >= 21);
// console.log(filtered);
// filter (get retail companyes)
// const retailCompanies = companies.filter(function (company) {
//     if (company.category == 'Retail') {
//         return true;
//     }
// });
// const retailCompanies = companies.filter((company) => company.category == 'Retail');
// console.log(retailCompanies)
// get 80`s companies
// const companies80 = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// const companies80 = companies.filter(company => Math.floor(company.start / 10) == 198);
// console.log(companies80);
// get companies that lasted 10 years or more
// const companies10 = companies.filter(company => (company.end - company.start) >= 10);
// console.log(companies10);

// MAP
// create array of company names
// const companyNames = companies.map(function (company) {
//     return company.name;
// });
// const companyNames = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNames);
// const agesMap = ages.map((age) => age * age);
// const agesMap = ages
//     .map((age) => age * age)
//     .map((age) => age * 2);
// console.log(agesMap);

// SORT
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// sort ages
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// REDUCE
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// let ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// let ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);
// get total years for all companies
// const totalYears = companies.reduce(function (total, company) { return (total + company.end - company.start) }, 0);
// const totalYears = companies.reduce((total, company) => (total + company.end - company.start), 0);
// console.log(totalYears);

// COMBINE METHODS
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
// console.log(combined);


// JAVASCRIPT OOP
// console.log(navigator.appVersion);

// // constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     // console.log(title + ' initialised');
//     // this.getSummary = function () {
//     //     return `${this.title} was written by ${this.author} in ${this.year}`;
//     // };
// }
// // create a prototype methods
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
// Book.prototype.getAge = function () {
//     const years = new Date().getFullYear() - this.year;
//     return `it's ${years} year(s) old`;
// }
// Book.prototype.revise = function (newYear) {
//     this.year = newYear;
//     this.revised = true;
// }
// // instantiation
// const book1 = new Book('book alpha', 'John Doe', 2000);
// const book2 = new Book('book beta', 'John Doe', 2010);
// console.log(book1.getSummary());
// console.log(book1);


// // inheritance

// // constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// // Magazine constructor
// function Magazine(title, author, year, month) {
//     Book.call(title, author, year);
//     this.month = month;
// }
// // inherit proto methods
// Magazine.prototype = Object.create(Book.prototype);
// // use magazine constructor
// Magazine.prototype.constructor = Magazine;

// const mag1 = new Magazine('mag1', 'John Doe', 1900, 'jan');
// console.log(mag1);

// Object of protos
// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function () {
//         const years = new Date().getFullYear() - this.year;
//         return `it's ${years} year(s) old`;
//     }
// };

// Create Object

// const book1 = Object.create(bookProtos);
// book1.title = 'Ray Tracing';
// book1.author = 'Fridrihth';
// book1.year = 1929;

// const book1 = Object.create(bookProtos, {
//     title: { value: 'RayTracing' },
//     author: { value: 'artyu' },
//     year: { value: 2010 }
// });

// ****ES6****

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `it's ${years} year(s) old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'AAAAAAAAA';
    }
}

// Magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Object instantiation
const book1 = new Book('book alpha', 'John Doe', 2000);
const book2 = new Book('book beta', 'John Doe', 2010);
const mag1 = new Magazine('book beta', 'John Doe', 2010, 'feb');