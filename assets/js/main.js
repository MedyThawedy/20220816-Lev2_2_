let inputValue = 0;
let outputElement = document.getElementById('pOutput');
let outputValue = '';
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    inputValue = 0;
    document.getElementById('pOutput').innerHTML = '';
    inputValue = Number(document.getElementById('inputNumber').value);
    outputElement = outputElement.innerHTML;
    console.log('inputValue :', inputValue);
    outputElement = '<p>' + 'L';
    for (let i = 1; i <= inputValue; i++) {
        outputValue += 'o';
        console.log('In the loop index = ', i, ' outputValue = ', outputValue);
    }
    outputElement += outputValue + 'P' + '</p>';
    console.log(outputValue);
    console.log(outputElement);

    document.getElementById('pOutput').innerHTML = outputElement;
    outputValue = '';
});