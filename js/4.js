// // Функции-конструкторы
// const BMW = function (color = 'white') {
//   this.engine = 'v6';
//   this.price = 10000;
//   this.color = color;
//   // Не делай так:
//   this.acceleration = function () {
//     console.log('7 sec');
//   };
// };

// const myCar = new BMW('red');
// console.log(myCar);

// const myCar2 = new BMW();
// console.log(myCar2);

// /* Добавлять методы объектам, которые созданы из этой функции-конструктора,
// нужно в ее prototype */

// console.log(BMW.prototype);

// BMW.prototype.getObject = function () {
//   return this;
// };

class BMW {
  constructor(color) {
    this.engine = 'v6';
    this.price = 10000;
    this.color = color;
  }

  getObject() {
    return Object;
  }
}

const myCar = new BMW('blue');
console.log(myCar);
