const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};
const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};
const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
  size: '',
  stuffings: [],
  sauces: [],
  getPizza: function () {
    return {
      Размер: this.size,
      Добавки: this.stuffings,
      Соусы: this.sauces,
    };
  },
  getStuffing: function (stuffing) {
    for (const key of Object.keys(STUFFING)) {
      if (stuffing.toUpperCase() === key.toUpperCase()) {
        this.stuffings.push(key.toUpperCase());
        return;
      }
    }
    console.log('Нет такой добавки');
  },
  getSuaces: function (sauce) {
    for (const item of this.sauces) {
      if (sauce.toUpperCase() === item.toUpperCase()) {
        console.log('Такой соус уже добавлен');
        return;
      }
    }

    for (const item of Object.keys(SAUCES)) {
      if (sauce.toUpperCase() === item.toUpperCase()) {
        this.sauces.push(sauce.toUpperCase());
        return;
      }
    }
    console.log('Нет такого соуса');
  },
};

pizza.getStuffing('Tomato');
// console.log('Добавки:', pizza.stuffings);

pizza.getSuaces('KETChUP');
// console.log('Соусы:', pizza.sauces);

console.table(pizza.getPizza());
