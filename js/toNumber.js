// TO NUMBER

// String to number
let value = 'some text';

// 1-й способ
let toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

// Строчное число к числу
value = '123';

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

// Пустая строка
value = '';

// 1-й способ
toNumber = Number(value);
console.log(`Пустая строка через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`Пустая строка через унарный +:`, toNumber);
console.log(typeof toNumber);

// Строка с пробелом
value = ' ';

// 1-й способ
toNumber = Number(value);
console.log(`Строка с пробелом через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`Строка с пробелом через унарный +:`, toNumber);
console.log(typeof toNumber);

// Boolean to string
value = true;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

// Undefind
value = undefined;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

// null
value = null;

// 1-й способ
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);
