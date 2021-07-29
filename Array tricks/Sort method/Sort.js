// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers)

var items = [
    { name: 'Rajon', age: 21 },
    { name: 'Ibrahim', age: 37 },
    { name: 'Grandpa', age: 45 },
    { name: 'Baby', age: -12 },
    { name: 'Jabed', age: 13 }
  ];
  
  // sort by age
  items.sort(function (a, b) {
    return a.age - b.age;
   
  });
  
  console.log(items.sort(function (a, b) {
    return a.age - b.age;
   
  }));