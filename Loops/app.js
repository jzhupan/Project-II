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

//The break keyword in a Loop//

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

//******************Whale talk******************//
let input = 'acountryMile';
// let input = 'hello human';
const vowels = ['a','e','i','o','u'];
//Whales only speak vowels//
let resultArray = [];
for (let i = 0; i < input.length; i ++){
  //Whales speak double 'e' and 'u'//
   if (input[i] === 'e'){
    resultArray.push(input[i]);
  }
    if (input[i] === 'u'){
      resultArray.push(input[i]);
    }
  // console.log(input[i].toLowerCase() + ' ' + i);
  //Was able to only print the vowels//
  for (let vInnerLoop = 0; vInnerLoop < vowels.length; vInnerLoop ++){
    if (input[i] === vowels[vInnerLoop]){
      let vowelsResults = vowels[vInnerLoop];
      // console.log(vowelsResults);
    resultArray.push(vowelsResults);
    }
    // console.log(vowels[vInnerLoop]+ ' ' + vInnerLoop);
  }
}
// console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);

//Write a nested for loop that will print out the iterator value of the outer loop times the iterator value of the inner loop.///
for (let i = 0; i < 11; i++){
  for (let j = 0; j < 11; j++){
    console.log(i*j);  
  }
}
