// function myMainFunction(callback, a, b) {
//   let result = callback(a, b);
//   return result;
// }

// function myCallback1(x, y) {
//   return x + y;
// }

// console.log(myMainFunction(myCallback1, 3, 5));

// function myCallback2(x, y) {
//   return x - y;
// }

// console.log(myMainFunction(myCallback2, 5, 3));

// const liteObject = {
//   x: 1,
//   y: 2,

//   sum() {
//     return this.x + this.y;
//   },
// };

// const newObject = Object.create(liteObject);
// newObject.x = 10;
// newObject.y = 30;

// console.log(newObject.sum());

// const newObject3 = {
//   title: 'new',
//   total: 20,
//   count: 50,

//   getTitle() {
//     return this.title;
//   },
// };

// console.log(newObject3.getTitle());

// const newObject4 = {
//   title: 'Jakudza',
// };
// console.log(newObject3.getTitle.call(newObject4));

// const napoleon = {
//   _layers: 7,
//   cream: 'заварной',

//   get layers() {
//     return this._layers;
//   },

//   set layers(newProperty) {
//     this._layers = newProperty;
//   },
// };

// class Napoleon {
//   constructor(layers, cream) {
//     this._layers = layers;
//     this._cream = cream;
//   }

//   get layers() {
//     return this._layers;
//   }

//   set layers(newProperty) {
//     this._layers = newProperty;
//   }

//   get cream() {
//     return this._cream;
//   }

//   set cream(newCream) {
//     this._cream = newCream;
//   }
// }

// const napoleon1 = new Napoleon(7, 'заварной');
// console.log(napoleon1.layers);
// console.log(napoleon1.cream);
// console.log((napoleon1.layers = 5));

const obj1 = {
  name: 'John',
  age: 22,
};

const obj2 = {
  name: 'Bob',
  age: 67,
};

const arr = [obj1, obj2];
console.log(arr);

const [, name1] = arr;
console.log(name1);
