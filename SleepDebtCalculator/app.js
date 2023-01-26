const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 7;
    break;
    case 'Tuesday':
    return 8;
    break;
    case 'Wednesday':
    return 8;
    break;
    case 'Thursday':
    return 8;
    break;
    case 'Friday':
    return 5;
    break;
    case 'Saturday':
    return 9;
    break;
    case 'Sunday':
    return 9;
    break;
}
};
// console.log(getSleepHours('Monday'));

// const getActualSleepHours = () =>  7 + 8 + 8 + 8 + 5 + 9 + 9;
let getActualSleepHours = () =>  7 + 8 + 8 + 8 + 5 + 9 + 9;

// console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => {
return idealHours * 8;
}

// console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
actualSleepHours= 65;
idealSleepHours = getIdealSleepHours(8);
if (actualSleepHours === idealSleepHours) {
  return 'You got the perfect amount of sleep!';
} else if (actualSleepHours > idealSleepHours){
  return 'Sleeping too much! You are sleeping ' + (Math.abs(idealSleepHours - actualSleepHours)) + ' more hour(s) than you need!';
} else if (actualSleepHours < idealSleepHours) {
return 'You need some rest. You are sleeping ' + (idealSleepHours - actualSleepHours) + ' hour(s) less.';
} else {
  return 'Are you a Vampire?';
}
}
console.log(calculateSleepDebt());

// calculateSleepDebt();

