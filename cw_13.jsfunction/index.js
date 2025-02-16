let array = ["abc", 23, 52, 1992];

function some(array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function every(array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (!fun(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// Juft sonlarni tekshirish funksiyasi
function evenNumber(num) {
    return  num % 2 === 0;
}

console.log(`"some" funksiyasidan foydalanib, juft sonlar uchun tekshirish: 
    massiv: ${array}, funksiya: evenNumber, 
    natija: ${some(array, evenNumber)} - true`);
     
     

array = [2, 3, 4];

function elmGreaterIndex(elem, index) {
    return elem > index;
}

console.log(`"every" funksiyasidan foydalanib, barcha elementlar indeks qiymatlaridan katta ekanligini tekshirish:massiv: ${array},
            funksiya: elmGreaterIndex,  natija: ${every(array, elmGreaterIndex)} - true`);
   

// Yana qo'shimcha testlar:
console.log(some([1, 3, 5, 7], evenNumber)); // false (hech biri juft emas)
console.log(some([2, 4, 6, 8], evenNumber)); // true (kamida bitta juft bor)
console.log(every([2, 4, 6, 8], evenNumber)); // true (hammasi juft)
console.log(every([1, 2, 3, 4], evenNumber)); // false (hammasi juft emas)
