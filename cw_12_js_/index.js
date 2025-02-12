function myParseInt(numStr, radix = 10) {
    if (typeof numStr !== "string") numStr = String(numStr).trim();
    else numStr = numStr.trim();
    
    if (numStr === "" || radix < 2 || radix > 36) return NaN;
    
    let res = 0;
    let sign = 1;
    let startIndex = 0;
    
    if (numStr[0] === "-") {
        sign = -1;
        startIndex = 1;
    }
    
    for (let i = startIndex; i < numStr.length; i++) {
        let char = numStr[i];
        if (char === " " || char === ".") break;
        
        let digit = "0123456789abcdefghijklmnopqrstuvwxyz".indexOf(char.toLowerCase());
        if (digit === -1 || digit >= radix) return NaN;
        
        res = res * radix + digit;
    }
    
    return res * sign;
}

console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt("123") === 123}`);
console.log(`conversion string to number in binary number system myParseInt("123",2)=1 ${myParseInt("123", 2) === 1}`);
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) === 35}`);
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 123 ${myParseInt("123.6", 10) === 123}`);
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") === 123}`);
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") === 12}`);
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`);
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`);
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") === -123}`);
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) === 123}`);

