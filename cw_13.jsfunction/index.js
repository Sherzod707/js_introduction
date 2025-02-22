function sum(...operands){
    let sum = 0;
    for(let i = 0; i < operands.length; i++){
        sum = sum + operands[i];
    }
    return sum;
}
//primeri funksii
console.log(`sum(1-2-3-4-5)=${sum(1,2,3,4,5)}`);
console.log(`sum([1,2,3,4)=${sum([1,2,3,4])}`);