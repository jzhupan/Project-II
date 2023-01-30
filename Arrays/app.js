//Arrays with let and const//
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);
//The .length property//
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);
//The .push() Method//
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('sweep floor', 'tidy bed');
console.log(chores);
//The .pop() Method//
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

let removed = chores.pop();
console.log(chores);
console.log(removed);
//More Array Methods//
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
// console.log(groceryList.slice(1,4));
// console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

