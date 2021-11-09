let Slice = document.getElementById('array_slice');
let Splice = document.getElementById('array_splice');
let Filter = document.getElementById('array_filter');
let Reject = document.getElementById('array_reject');
let Lambda = document.getElementById('array_lambda');
let Maped = document.getElementById('array_map');
let Reduced = document.getElementById('array_reduce');

const foodArray = ['Pizza', 'Burger', 'SpringRoll', 'Kabahk', 'ChikkanGokkah'];
let modiFiedFood;
createNode('Original Array : ', foodArray, Slice);
modiFiedFood = foodArray.slice(2, 5);
createNode('Modified as slice (2, 5) : ', modiFiedFood, Slice);

const monthsArray = ['Pizza', 'Burger', 'SpringRoll', 'Kabahk', 'ChikkanGokkah'];
createNode('Original Array : ', monthsArray, Splice);
monthsArray.splice(2, 0, 'iceCream');
createNode('Modified as splice (1, 0, iceCream) : ', monthsArray, Splice);

const numArray = [12, 18, 20, 22, 45, 28, 4, 3, 6, 7];
let filtered;
createNode('Original Array : ', numArray, Filter);
function bigNumbers(value) {
    return value%2 == 0;
}
filtered = numArray.filter(bigNumbers);
createNode('numArray.filter(bigNumbers) : ', filtered, Filter);

const numberArray = [12, 18, 20, 22, 45, 5, 11, 13, 17, 19, 23, 29, 31, 28, 4, 3, 6, 7];
numberArray.sort(function(a, b) { return a - b});
let filtereD;
createNode('Original Array : ', numberArray, Reject);
function primeNumbers(value) {
    for (i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false;
    }
    return true;
}
filtereD = numberArray.filter(primeNumbers);
createNode('numberArray.filter(primeNumbers) : ', filtereD, Reject);

const numberarray = [10, 8, 7, 9, 4, 3 , 1, 5, 6, 2];
let sortedArray;
createNode('Original Array : ', numberarray, Lambda);
sortedArray = numberarray.sort((a, b) =>  a - b);
createNode('numberarray.sort((a, b) =>  a - b) : ', sortedArray, Lambda);

const mapArray = [11, 34, 20, 5, 53, 16];
let mapedArray;
createNode('Original Array : ', mapArray, Maped);
mapedArray = mapArray.map((number) => number * number);
createNode('mapArray.map((number) => number * number) : ', mapedArray, Maped);

const myArray = [2, 3, 5, 10];
let reducedArray;
createNode('Original Array : ', myArray, Reduced);
reducedArray = myArray.reduce(function (a, b) {
    return a * b;
});
createNode('myArray.reduce(function (a, b) : ', reducedArray, Reduced);


function createNode(msg, result, tag_id) {
    var tag = document.createElement('p');
    var text = document.createTextNode(msg);
    tag.appendChild(text);
    var text = document.createTextNode(result);
    tag.appendChild(text);
    tag_id.appendChild(tag);
}