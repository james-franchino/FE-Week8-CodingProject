class Dish {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

class Menu {
  constructor() {
    this.dishes = []; // Array to store dishes
  }

  addDish(dish) {
    this.dishes.push(dish);
  }

  viewDishes() {
    if (this.dishes.length === 0) {
      return "The menu is empty";
    }
    return this.dishes
      .map((dish, index) => `${index + 1}. ${dish.describe()}`)
      .join("\n");
  }

  deleteDish(index) {
    if (index >= 0 && index < this.dishes.length) {
      this.dishes.splice(index, 1);
      return "Dish removed successfully";
    } else {
      return "Invalid index. No dish removed";
    }
  }
}

class MenuApp {
  constructor() {
    this.menu = new Menu();
  }

  start() {
    let selection = "";
    do {
      selection = this.showMainMenu();
      switch (selection) {
        case "1":
          this.createDish();
          break;
        case "2":
          this.viewMenu();
          break;
        case "3":
          this.deleteDish();
          break;
        case "0":
          alert("Exiting the app. Goodbye!");
          break;
        default:
          alert("invalid option. Please try again.");
      }
    } while (selection !== "0");
  }

  showMainMenu() {
    return prompt(`
        Menu App:
        1. Add a new dish
        2. View all dishes
        3. Remove a dish
        0. Exit
        `);
  }

  createDish() {
    const name = prompt("Enter the name of the dish:");
    const price = parseFloat(prompt("Enter the price of the dish:"));
    if (name && !isNaN(price)) {
      const dish = new Dish(name, price);
      this.menu.addDish(dish);
      alert("Dish added successfully!");
    } else {
      alert("Invalid input. Dish not added.");
    }
  }

  viewMenu() {
    const menuDescription = this.menu.viewDishes();
    alert(menuDescription);
  }

  deleteDish() {
    const index =
      parseInt(prompt("Enter the index of the dish to remove:")) - 1;
    const message = this.menu.deleteDish(index);
    alert(message);
  }
}

const app = new MenuApp();
app.start();
