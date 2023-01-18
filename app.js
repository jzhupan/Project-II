function convertButton() {
    document.getElementsByClassName("btn btn-primary").onclick = function() {convertButton()};
    console.log('Tried to convert');
}