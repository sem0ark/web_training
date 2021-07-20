"use strict";

function temp(a, b){
    var t = [];
    var at = [...a,...b];
    for (let i of at) {
        let b1 = a.includes(i);
        let b2 = b.includes(i);
        if (((b1 || b2) && !(b1 && b2)) && (!(t.includes(i)))) {
            t.push(i);
        };
    };
    return (t.sort());
};

function sym(...args) {
    //console.log(args);
    //console.log(args);
    return args.reduce((a, b) => temp(a, b));
};
//console.log(sum(1,2,3,4,5));
//console.log(sym([1, 2, 3], [5, 2, 1, 4], [1,3,2]));
let alf = 'abcdefghijklmnopqrstuvwxyz';
let a = [[1,'a'],[1,'cb'],[3,'ca']];
a.sort((a, b) => alf.indexOf(a[1]) - alf.indexOf(b[1]));
console.log(a);
