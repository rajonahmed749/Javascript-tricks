// Filter Objects in ar Array based on specific condition
const Order = [
    { name: "Chicken", price: 450 },
    { name: "Pizza", price: 600 },
    { name: "Burger", price: 90 }
]
// passing a callback function and set filter condition 
const FilteredOrder = Order.filter(item => item.price > 100);
console.log(FilteredOrder); // [ { name: 'Chicken', price: 450 }, { name: 'Pizza', price: 600 } ]

// another example
const Fruits = [
    { name: "Lemon", price: 70 },
    { name: "Mango", price: 300 },
    { name: "Pineapple", price: 90 },
    { name: "", price: 0 }
]
// passing a callback function and set filter condition 
const FinalFruits = Fruits.filter(item => item.price != 0);
console.log(FinalFruits);

