//1
let arr = [1, 2, 4, 8, 16];
let total = 0;
function processArrayc(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    callback(total);
}
function processArray(arr, total) {
    console.log(total);
}


processArrayc(arr, processArray);
processArrayc([1, 12, 14, 18, 16], processArray);

const processArrays = (arr) => {
    let ttotal = 0;
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        ttotal += arr[i];
    }
    min = Math.min(...arr);
    max = Math.max(...arr);
    console.log(max);
    console.log(min);
    console.log(ttotal);
}

processArrays([2, 12, 14, 18, 16]);

//2
function operate(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}

function multyply(a, b) {
    return a * b;
}

function devided(a, b) {
    return a / b;
}

function message(a, b) {
    console.log(operate(a, b, add));
}

function messagem(a, b) {
    console.log(operate(a, b, substract));
}

function messagemu(a, b) {
    console.log(operate(a, b, multyply));
}

function messaged(a, b) {
    console.log(operate(a, b, devided));
}

operate(2, 3, message);
operate(4, 3, messagem);
operate(4, 3, messagemu);
operate(36, 4, messaged);

//2.1
const operater = (a, b, callback) => {
    return callback(a, b);
};

console.log(operater(10, 5, function(a, b){ return a - b})); 
console.log(operater(10, 5, function(a, b){ return a + b})); 
console.log(operater(10, 5, function(a, b){ return a * b})); 
console.log(operater(10, 5, function(a, b){ return a / b})); 