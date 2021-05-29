// const arr = [1, 2, 3, 4, 5];

// const mapArr = arr.map(item => item + 1);
// console.log(mapArr);

// const filterArr = arr.filter(item => item > 1);
// console.log(filterArr);

// const findArr = arr.find(item => item > 1);
// console.log(findArr);

// const forEachArr = arr.forEach(item => item);
// // console.log(forEachArr);

// const reduceArr = arr.reduce((acc, item) => {
//   //   console.log(acc, item);
//   return acc + item;
// }, 0);
// console.log(reduceArr);

// const reduceArr2 = arr.reduce((acc, item) => (acc = acc.push(item)), []);

// console.log(reduceArr2);

const students = [
  { name: 'Max', gender: 'male', age: 16 },
  { name: 'Zlata', gender: 'female', age: 32 },
  { name: 'Misha', gender: 'male', age: 27 },
];

const age = students.filter(item => item.age > 16).map(item => item.name);
console.log(age);

const girls = students.filter(item => item.gender === 'female');
console.log(girls);

const boys = students.filter(item => (item.gender = 'male'));
console.log(boys);

const averageAge =
  students.reduce((total, student) => {
    total += student.age;
    return total;
  }, 0) / students.length;

console.log(averageAge);

const averageAge2 = students.reduce((total, student, idx, arr) => {
  total += student.age / arr.length;
  return total;
}, 0);

console.log(averageAge2);

const fruit = ['watermelon', 'peach', 'strawberry', 'grape'];

class IceCream {
  constructor(fruit, price = 20) {
    this.name = `${fruit}-ice`;
    this.price = price;
  }
}

const iceCreams = [];

fruit.forEach(item => {
  iceCreams.push(new IceCream(item));
});

console.table(iceCreams);

const fruitObj = [
  { productName: 'watermelon', price: 15 },
  { productName: 'peach', price: 30 },
  { productName: 'strawberry', price: 20 },
  { productName: 'grape', price: 25 },
];

const iceCreams2 = [];

fruitObj.forEach(item => {
  const { productName: name, price } = item;
  iceCreams2.push(new IceCream(name, price));
});

console.table(iceCreams2);
