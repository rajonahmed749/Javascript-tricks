        // Remove deuplicate number from an array 

const arr = [1, 2, 11, 1, 23, 23, 33, 33, 3, 4, 5, 6, 7, 7]
const NewArray = [... new Set(arr)]
console.log(arr)
console.log(NewArray)


// another example

const ages = [21,22,23,10,19,15,15,16,21,33,32,10,22,21,15,16,17,18,19,20,20];
const selectedAges = [...new Set(ages)];
console.log(selectedAges);