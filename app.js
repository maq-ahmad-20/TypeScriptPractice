"use strict";
const a = document.getElementById('num1');
const b = document.getElementById('num2');
const btn = document.querySelector('button');




function addTowNums(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    else if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a + '' + b;
    }
    else {
        return +a + +b;
    }
}
const numRes = [];
const strResult = [];
function printRes(resultObj) {
    console.log(resultObj.value);
}
console.log(addTowNums(1, 2));
//console.log(addTowNums("1","2"
btn.addEventListener('click', (e) => {
    const n1 = a.value;
    const n2 = b.value;
    const res = addTowNums(+n1, +n2);
    console.log(res);
    numRes.push(res);
    const strRes = addTowNums(n1, n2);
    strResult.push(strRes);
    console.log(strRes);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("It worked");
    }, 2000);
});
myPromise.then((res) => {
    console.log(res);
});
