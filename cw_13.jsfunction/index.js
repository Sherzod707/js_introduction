// function is an object with operator () (function call)
// convertionm function to string will return string conteiner text of the function
// convertion function to number will return  NaN 
const sum = function(a, b){
    return a + b;
}
const subtract = function(a, b){
    return a - b;
}
const multiply = function(a, b){
    return a * b;
}

function calculate(fun, a, b) {
    return fun(a, b);
}
console.log(calculate(multiply, 5, sum));
// console.log(10(1, 6));
