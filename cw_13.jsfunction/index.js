let array = ["abc", 23];


function forEach(array, fun) {
    for(let i = 0; i < array.length; i++){
        fun(array[i], i);
    }
}
//forEach takes array and function with two parameters first
//  - element of array, second - index

function print(elem, index) {
    console.log(`index: ${index}, element: ${elem}`);
};
forEach(array, print);
///////////////////////////////////////
function some(array, fun) {
    //TODO
    //a returns true if at least one elements of the array match 
    // a condition given in the function (fun)
}
function evenNumber(num) {
    return num % 2 == 0;
}
console.log(`using "some" function for even numbers array:
     ${array}, function ${evenNumber}, 
     result: ${some(array,evenNumber)} - false`);

function every(array, fun) {
    //TODO
    //returns true if all elements of the array match a 
    //conditions given in the function (fun)
}
array = [2, 3, 4];
function elmGreaterIndex(elem, index) {
    return elem > index;
}
console.log(`using "every" function for elements 
    greater than th index values array:
     ${array}, function ${elmGreaterIndex}, 
     result: ${every(array,evenNumber)} - true`);

    //# HW 13 definition
    //## write the method "some" (ree comments)
    //## write the method "every" (see comments)
    //## write more test cases (console.log functionality)