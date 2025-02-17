/*  Алгоритмы 
    - Поиска
    - Сортировки
    - Рекурсивные
    - Дейкстры для поиска
    кратчайшего пути для графе
    - Обхода деревьев
    - Кеширования

     СТРУКТУРЫ
    - Массивы
    - Связный список
    - Очередь
    - Стэк
    - Сет
    - Мэп
    - двойное дерево
    - н-арное дерево
    - графы
*/
//  linear search - "chiziqli qidiruv" bir elementni ketma-ket tekshiradi.
const array = [1,4,5,8,5,1,2,7,5,2,11];
let count = 0;
function linerSearch(array, item) {
    for(let i = 0; i < array.length; i++){
        count += 1;
        if(array[i] === item){
            return i;
        }
    }
    return null;
}
console.log(linerSearch(array, 1));
console.log('count = ', count);

// binary search - "ikkilik qidiruv" Bu algoritm ma'lumotlar 
// to'plami tartiblangan bo'lsa, qidirilayotgan elementni topish 
// uchun to'plamni ikkiga bo'lib, o'rtadagi element bilan 
// solishtiradi va kerakli qismga qarab qidiruvni davom ettiradi. 
// Bu usul linear qidiruvdan tezroq ishlaydi, chunki har bir 
// qadamda qidiruv maydoni yarmiga kamayadi.

const array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 count = 0;
function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while(found === false && start <= end){
        count += 1;
        middle = Math.floor((start + end) / 2);
        if(array[middle] === item){
            found = true;
            position = middle;
            return position;
        }
        if(item < array1[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }
    return position;
}
console.log(binarySearch(array1, 0));

console.log(count);
