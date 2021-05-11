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
  _size: '',
  stuffings: [],
  sauces: [],

  getPizza() {
    return {
      Размер: this._size,
      Добавки: this.stuffings,
      Соусы: this.sauces,
    };
  },

  get size() {
    return `Размер пиццы: ${this._size}`;
  },

  set size(size) {
    for (const item of Object.keys(SIZES)) {
      if (size.toUpperCase() === item.toUpperCase()) {
        this._size = size.toUpperCase();
        return;
      }
    }
    console.log('Такого размера нет');
  },

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

  addSuace(sauce) {
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

  removeSuace(sauce) {
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

  getTotalPrice() {
    let total = 0;

    if (this._size) {
      total += SIZES[this._size]['price'];
    }

    for (const item of this.stuffings) {
      total += STUFFING[item]['price'];
    }
    for (const item of this.sauces) {
      total += SAUCES[item]['price'];
    }
    total = total.toFixed(2);
    return `Общая стоимость: ${total}`;
  },

  getCalories() {
    let total = 0;

    if (this._sizes) {
      total += SIZES[this._size]['cal'];
    }

    for (const item of this.stuffings) {
      total += STUFFING[item]['cal'];
    }

    for (const item of this.sauces) {
      total += SAUCES[item]['cal'];
    }

    return `Всего калорий: ${total}`;
  },

  getTime() {
    let time = 0;

    if (this._size) {
      time += SIZES[this._size]['time'];
    }

    for (const item of this.stuffings) {
      time += STUFFING[item]['time'];
    }

    for (const item of this.sauces) {
      time += SAUCES[item]['time'];
    }

    return `Время приготовления: ${time} минут`;
  },

  getPizzaInfo() {
    const price = this.getTotalPrice();
    const calories = this.getCalories();
    const stuffings = this.stuffings.join(', ');
    const sauses = this.sauces.join(', ');
    const time = this.getTime();

    const error = [];

    if (!this._size) {
      error.push('Не выбран размер пиццы');
    }

    if (stuffings.length < 1) {
      error.push('В пицце нет добавок');
    }

    if (sauses.length < 1) {
      error.push('В пиццу не добавлены соусы');
    }

    if (error.length > 0) {
      return error;
    }

    return [
      price,
      calories,
      pizza.size,
      `Добавки: ${stuffings}`,
      `Соусы: ${sauses}`,
      time,
    ];
  },
};

// console.table(pizza.getPizza());
// pizza.removeStuffing();
pizza.addStuffing('beacon');
// pizza.addStuffing('tomato');
// pizza.removeStuffing('beacoN');
// console.table(pizza.getPizza());

// pizza.addSuace('Mustard');
pizza.addSuace('BoloGnese');
// console.table(pizza.getPizza());
// pizza.removeSuace('mustard');
pizza.size = 'big';
// console.log(pizza.size);
console.table(pizza.getPizza());
console.log(pizza.getTotalPrice());
console.log(pizza.getCalories());
console.log(pizza.getTime());

console.table(pizza.getPizzaInfo());
