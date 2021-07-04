// Remove falsy values from any array
let myCollection = [ "Banana", NaN,  "Lemon", false,"Pineapple", null,'', "Coconut"]


//  passing Boolean to array.filter() will remove falsy values from array 
let fruits = myCollection.filter(Boolean)


console.log(fruits);