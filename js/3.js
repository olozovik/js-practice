// const answers = [
//   {
//     email: 'a@gmail.com',
//     score: 11,
//   },
//   {
//     email: 'b@gmail.com',
//     score: 13,
//   },
//   {
//     email: 'c@gmail.com',
//     score: 19,
//   },
//   {
//     email: 'd@gmail.com',
//     score: 12,
//   },
//   {
//     email: 'e@gmail.com',
//     score: 10,
//   },
// ];

// // Уважаемый имэйл, ваш ответ со скором принят. В случае, если он 16 и более, если
// // меньше не принят. Пересдайте тест.
// // Если принят, добавить свойство "сдано" = тру, до 16 - фолс.

// function checkResult(arr) {
//   let message = '';

//   for (const answer of arr) {
//     if (answer.score >= 16) {
//       message = `Уважаемый ${answer.email}, ваш ответ со скором ${answer.score} принят`;
//       answer.isDone = true;
//     } else {
//       message = `Уважаемый ${answer.email}, ваш ответ со скором ${answer.score} не принят. Пересдайте`;
//       answer.isDone = false;
//     }
//     console.log(message);
//   }
// }

// class GetForm {
//   constructor(email, ...rest) {
//     this.email = email;
//     this.result = rest;
//     this.score;
//   }

//   getScore() {
//     let total = 0;
//     for (const number of this.result) {
//       total += number;
//     }
//     this.score = total;
//   }
// }

// const form1 = new GetForm('some@gmail.com', 3, 4, 4, 6, 7);
// // console.log(form1);
// form1.getScore();
// console.log(form1);

// const getData = () => {
//   console.log('Вы нажали на кнопку');
//   const x = new GetForm('some@gmail.com', 3, 4, 4, 6, 7);
//   console.log(x);
//   x.getScore();
//   answers.push(x);
//   console.log(answers);
//   checkResult(answers);
// };

// const btn = document.querySelector('.button');
// btn.addEventListener('click', getData);

/*----------------------------------------*/

const dish = {
  name: 'Цезарь',
  products: ['курица', 'сыр', 'салат'],

  updateProduct(product, newProduct) {
    // for (let i = 0; i < this.products.length; i += 1) {
    //   if (product === this.products[i]) {
    //     this.products[i] = newProduct;
    //   }
    // }
    for (let item of this.products) {
      if (item === product) {
        const index = this.products.indexOf(item);
        this.products[index] = newProduct;
      }
    }
    return this.products;
  },

  addProduct(...newProduct) {
    console.log(newProduct);
    this.products.push(...newProduct);
  },

  removeProduct(product) {
    for (let i = 0; i <= this.products.length; i += 1) {
      if (this.products[i] === product) {
        this.products.splice(i, 1);
      }
    }
  },
};

dish.updateProduct('курица', 'лосось');
dish.addProduct('помидоры');
console.log(dish);
dish.removeProduct('помидоры');
console.log(dish);

const dish2 = {
  name: 'Georgian',
  products: [],
};

dish.addProduct.call(dish2, 'tomato', 'nuts');
console.log(dish2);

const y = ['tomato', 'cherry'];
dish.updateProduct.call(dish2, ...y);
const z = ['nuts', 'cucumbers'];
dish.updateProduct.apply(dish2, z);
console.log(dish2);
