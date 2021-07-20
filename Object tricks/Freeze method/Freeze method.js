// A frozen object can no longer be changed;
const items = {
    rice: "5kg",
    oil: "10kg",
    egg: "1 dozen"
}
Object.freeze(items)
items.oil= "5kg";
console.log(items.oil); // Output:- 10kg