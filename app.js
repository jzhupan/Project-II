let puzzleBoard = document.querySelector('#puzzle');
let solveButton = document.querySelector('#solve-button');
const squares = 81;
let submission = [];

for(let i=0; i <squares; i++) {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);
    puzzleBoard.appendChild(inputElement);
}

let joinValues = () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value){
            submission.push(input.value)
        } else {
            submission.push(0);
        }
    })
    console.log(submission);
}

let populateValues = (isSolvable, solution) => {
    let inputs = document.querySelectorAll('input');
    if(isSolvable && solution) {
        inputs.forEach((input, i) => {
        input.value = solution[i]
        })
    }
}

let solve = () => {
    joinValues();
    let data = submission.join('');
    console.log('data', data);
const options = {
  method: 'POST',
  url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
  },
  data: '{"input":[0,0,8,9,0,0,4,0,0,0,0,5,6,0,0,0,0,0,3,0,0,7,0,0,6,0,9,5,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,6,5,0,0,2,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,8,9,0,0,0,7,0,4,0,0,2,0,0]}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
    populateValues(response.data.solvable, response.data.solution)
}).catch(function (error) {
	console.error(error);
});
}

solveButton.addEventListener('click', solve);
