// TO BOOLEAN

// String to boolean
let value = 'some text';

// 1-й способ
let toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// Строчное число
value = '123';

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// Пустая строка
value = '';

// 1-й способ
toNumber = Boolean(value);
console.log(`Пустая строка через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`Пустая строка через !!:`, toNumber);
console.log(typeof toNumber);

// Строка с пробелом
value = ' ';

// 1-й способ
toNumber = Boolean(value);
console.log(`Строка с пробелом через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`Строка с пробелом через !!:`, toNumber);
console.log(typeof toNumber);

// Число к булю
value = 0;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

value = 1;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// Undefined
value = undefined;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// null
value = null;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// NaN
value = NaN;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);

// Infinity
value = Infinity;

// 1-й способ
toNumber = Boolean(value);
console.log(`${value} через конструктор Boolean():`, toNumber);
console.log(typeof toNumber);

// 2-й способ
toNumber = !!value;
console.log(`${value} через !!:`, toNumber);
console.log(typeof toNumber);
