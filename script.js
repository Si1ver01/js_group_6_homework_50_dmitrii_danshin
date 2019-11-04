class Product {
  constructor(title, calories) {
    this.title = title;
    this.calories = calories;
  }
}

class Dish {
  constructor(title) {
    this.title = title;
    this.ingr = [];
  }

  addProduct = (name, quantity) => this.ingr.push({...name,quantity});

  getCalories = () => this.ingr.reduce((sum, c) => sum + c.calories * (c.quantity / 100),0);
}

class Calculate {
  constructor() {
    this.dishList = [];
  }

  addDish = dish => this.dishList.push(dish);

  getCalories = () => this.dishList.reduce((sum, c) => sum + c.getCalories(), 0);

  printDish = () => {
    this.dishList.forEach(element => {
      console.log(`${element.title} - 1 порция, ${element.getCalories()}ккал`);
      element.ingr.forEach(ingr => console.log(`${ingr.title}, ${ingr.quantity}гр. ${ingr.calories * (ingr.quantity / 100)}ккал`));
      console.log('============================');
    });
  };
}

const meat = new Product("Филе говядина", 158);
const rice = new Product("Рис", 130);
const onion = new Product("Лук", 40);
const carrot = new Product("Морковь", 41);

const plov = new Dish("Плов");
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new Calculate();
calculator.addDish(plov);
calculator.addDish(plov);
const calories = calculator.getCalories();
console.log(calories); // должно вывести 373.25
calculator.printDish();