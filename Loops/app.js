//Nested Loop//
const bobsFollowers = ["Amelia", "David", "Alex", "Victor"];
const tinasFollowers = ["Amelia", "Alex", "Belle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

//While Loop//
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard ;
while (currentCard !== 'spade') {
currentCard = cards[Math.floor(Math.random()*4)];
console.log(currentCard);
}

//Do... while Statement//
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded = cupsOfSugarNeeded + cupsAdded;
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded) {
  console.log(cupsAdded + 'cups of sugar added');
}
