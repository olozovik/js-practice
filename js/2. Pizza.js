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

  getPizza() {
    return {
      Размер: this.size,
      Добавки: this.stuffings,
      Соусы: this.sauces,
    };
  },

  // Метод для выборы размера пиццы

  addStuffing(stuffing) {
    for (const item of this.stuffings) {
      if (stuffing.toUpperCase() === item.toUpperCase()) {
        console.log('Такая добавка уже есть');
        return;
      }
    }
    for (const item of Object.keys(STUFFING)) {
      if (stuffing.toUpperCase() === item.toUpperCase()) {
        this.stuffings.push(stuffing.toUpperCase());
        return;
      }
    }
    console.log('Нет такой добавки');
  },

  removeStuffing(stuffing) {
    if (this.stuffings.length < 1) {
      console.log('В пицце еще нет добавок');
      return;
    }
    for (let i = 0; i < this.stuffings.length; i += 1) {
      if (stuffing.toUpperCase() === this.stuffings[i].toUpperCase()) {
        this.stuffings.splice(i, 1);
        return;
      }
    }
    console.log('Такой добавки нет в пицце');
  },

  addSuaces(sauce) {
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

  removeSuaces(sauce) {
    if (this.sauces.length < 1) {
      console.log('В пицце еще нет соусов');
      return;
    }
    for (let i = 0; i < this.sauces.length; i += 1) {
      if (sauce.toUpperCase() === this.sauces[i].toUpperCase()) {
        this.sauces.splice(i, 1);
        return;
      }
    }
    console.log('Такого соуса нет в пицце');
  },
};

// console.table(pizza.getPizza());
// pizza.removeStuffing();
// pizza.addStuffing('beacon');
// pizza.addStuffing('tomato');
// // pizza.removeStuffing('beacoN');
// console.table(pizza.getPizza());

pizza.addSuaces('Mustard');
pizza.addSuaces('BoloGnese');
console.table(pizza.getPizza());
pizza.removeSuaces('mustard');
console.table(pizza.getPizza());
