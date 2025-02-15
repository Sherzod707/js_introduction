const deltaDigit = "0".charCodeAt(0); // Получаем код символа "0" (48) //DELTADIGITga 0 berio uni chari 48 ligini aniqlavoldik
const deltaLetter = "a".charCodeAt(0) - 10; // Вычитаем 10 из кода символа "a" // "a" charkodi 97 va undan -10 qilsak DELTALATTERGA 87 saqlagan bolamiz

function myParseInt(numStr, radix = 10) {  // Создаем функцию "myParseInt" с параметрами (numStr, radix=10) FUNCTSIYA myParseInt qiymatlari (numStr, radix=10)
    let res = NaN;          // Начальное значение res устанавливаем как NaN (Not a Number)     // RESULT elon qilish kerak va unqa qiymat NaN beramiz
    let sign; // Переменная для хранения знака числа                             //SIGN ozgatuvchisi zapasda kerak
    
    if (radix > 1 && radix < 37) { // Основание системы счисления должно быть от 2 до 36 // AGAR(radix > 1 VA radix < 37) BOLSA
        numStr = getPreparedString(numStr); // Подготавливаем строку (удаляем пробелы, приводим к нижнему регистру)
        let index = getIndex(numStr); // Определяем, с какого символа начинается число
        sign = getSign(numStr); // Проверяем знак числа (положительное или отрицательное)
    
        while (!isNaN(digit = getDigit(numStr[index], radix))) { // Преобразуем каждый символ в цифру и проверяем
            if (isNaN(res)) { // Если res еще не число
                res = 0; // Устанавливаем его в 0
            }
            res = res * radix + digit; // Обновляем значение числа в заданной системе счисления
            index++; // Переходим к следующему символу
        }
    }
    
    return res * sign; // Возвращаем результат с учетом знака
}

function getPreparedString(str) { // Функция подготовки строки
    str = str + ""; // Преобразуем в строку
    str = str.trim(); // Удаляем пробелы в начале и в конце
    str = str.toLowerCase(); // Преобразуем заглавные буквы в строчные
    return str; // Возвращаем обработанную строку
}

function getIndex(str) { // Определяем, с какого символа начинается число
    let index = 0;
    if (str[0] == '-' || str[0] == '+') { // Если первый символ "-" или "+"
        index++; // Начинаем с следующего символа
    }
    return index;
}

function getSign(str) { // Определяем знак числа
    let sign = 1; // По умолчанию положительное
    if (str[0] == '-') { // Если первый символ "-"
        sign = -1; // Устанавливаем отрицательный знак
    }
    return sign;
}

function getDigit(symbol, radix) { // Преобразование символа в цифру
    let res = NaN;
    if (symbol) {
        const code = symbol.charCodeAt(0); // Получаем код символа
        const digit = symbol / symbol == 1 ? code - deltaDigit : code - deltaLetter; // Если цифра - вычитаем deltaDigit, если буква - deltaLetter
        
        if (digit >= 0 && digit < radix) { // Если значение в пределах 0 и radix
            res = digit; // Считаем его допустимой цифрой
        }
    }
    return res; // Возвращаем результат
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

