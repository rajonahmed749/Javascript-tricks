// Get highest/Lowest value in an array
const Order = [
    { name: "Grill", price: 450 },
    { name: "Pizza", price: 600 },
    { name: "Pepsi", price: 90 },
    { name: "Combo-pack", price: 2500 }
]

// The most expensive item
const ExpensiveItem = Math.max(...Order.map(item => item.price))
console.log("Expensive item price is", ExpensiveItem); // Expensive item price is 2500


// The Lowest value in an array
const Cheapest = Math.min(...Order.map(item => item.price))
console.log("the cheapest item price is", Cheapest); // the cheapest item price is 90

// We can calculate total price of this Order, like
const totalCost = Order.reduce((acc, item) => acc + item.price, 0)

console.log("the total cost is ", totalCost); // the total cost is  3640