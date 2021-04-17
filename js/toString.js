//  to string

// number to string

let value = 0;

// 1й способ
let toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = 123;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = Infinity;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = NaN;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = true;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = undefined;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);

value = null;

// 1й способ
toString = String(value);
console.log(`${value} через конструктор String():`, toString);
console.log(typeof toString);

// 2й способ
toString = value + '';
console.log(`${value} через конкатенацию String():`, toString);
console.log(typeof toString);
