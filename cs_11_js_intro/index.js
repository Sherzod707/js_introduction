let a = 100;
a /= 3;
console.log("non-normalized of division 100 on 3", a);
a = Math.trunc(a);
console.log("normalized of division 100 on 3", a);
a = Math.round(30.6);
console.log("30.6 rounded - ", a);

console.log("30.1 after method floor - ", Math.floor(30.1));
console.log("30.1 after method ceil - ", Math.ceil(30.1));

