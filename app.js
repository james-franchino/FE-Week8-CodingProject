// The Dish class represents a single dish with a name and price
class Dish {
  constructor(name, price) {
    this.name = name; // The name of the dish
    this.price = price; // The price of the dish
  }

  // Method to describe the dish in a readable format
  describe() {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

// The Menu class manages a list of dishes
class Menu {
  constructor() {
    this.dishes = []; // Array to store the dishes
  }

  // Method to add a dish to the menu
  addDish(dish) {
    this.dishes.push(dish);
  }

  // Method to view all dishes in the menu
  viewDishes() {
    if (this.dishes.length === 0) {
      return "The menu is empty"; // Message if no dishes are available
    }
    // Returns a formatted string of all dishes with their indices
    return this.dishes
      .map((dish, index) => `${index + 1}. ${dish.describe()}`)
      .join("\n");
  }

  // Method to delete a dish by its index
  deleteDish(index) {
    if (index >= 0 && index < this.dishes.length) {
      this.dishes.splice(index, 1); // Remove the dish at the given index
      return "Dish removed successfully";
    } else {
      return "Invalid index. No dish removed"; // Error message for invalid index
    }
  }
}

// The MenuApp class provides a menu-based interface for the user
class MenuApp {
  constructor() {
    this.menu = new Menu(); // Create a new Menu instance
  }

  // Main method to start the app
  start() {
    let selection = "";
    do {
      selection = this.showMainMenu(); // Show the main menu to the user
      switch (selection) {
        case "1":
          this.createDish(); // Option to add a new dish
          break;
        case "2":
          this.viewMenu(); // Option to view all dishes
          break;
        case "3":
          this.deleteDish(); // Option to delete a dish
          break;
        case "0":
          alert("Exiting the app. Goodbye!"); // Exit message
          break;
        default:
          alert("invalid option. Please try again."); // Error for invalid input
      }
    } while (selection !== "0"); // Loop until the user chooses to exit
  }

  // Display the main menu and return the user's selection
  showMainMenu() {
    return prompt(`
        Menu App:
        1. Add a new dish
        2. View all dishes
        3. Remove a dish
        0. Exit
        `);
  }

  // Method to create a new dish
  createDish() {
    const name = prompt("Enter the name of the dish:"); // Get dish name
    const price = parseFloat(prompt("Enter the price of the dish:")); // Get dish price
    if (name && !isNaN(price)) {
      const dish = new Dish(name, price); // Create a new Dish instance
      this.menu.addDish(dish); // Add the dish to the menu
      alert("Dish added successfully!");
    } else {
      alert("Invalid input. Dish not added."); // Error for invalid input
    }
  }

  // Method to view all dishes in the menu
  viewMenu() {
    const menuDescription = this.menu.viewDishes(); // Get menu details
    alert(menuDescription);
  }

  // Method to delete a dish by its index
  deleteDish() {
    const index =
      parseInt(prompt("Enter the index of the dish to remove:")) - 1; // Get index from user
    const message = this.menu.deleteDish(index); // Delete the dish
    alert(message);
  }
}

// Create an instance of MenuApp and start the app
const app = new MenuApp();
app.start();
