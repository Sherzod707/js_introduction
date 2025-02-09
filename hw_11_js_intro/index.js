function sumDigit(num) {
    let sum = 0;
    let digits = num.toString();
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    return sum;
}

console.log(sumDigit(123));


function sumDigits(num) {
    console.log(num - 123);
}
sumDigits("a123");

function sumDigi(num) {
    console.log(num - 123);
}
sumDigi("123a");

function sumDig(num) {
    let sum = 0;
    let array = Math.abs(num).toString();
    for (let i = 0; i < array.length; i++) {
         sum += parseInt(array[i]);
    }
    return sum;   
}
    console.log(sumDig(-123));

    function DisplayAnanas() {
        let a = "a";
        let s = "s";
        console.log(a + (a - s) + a + s);
        
    }
    DisplayAnanas()
