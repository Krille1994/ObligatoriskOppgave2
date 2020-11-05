

function chooseBar(i) {
    (chosenBar != i ? chosenBar = i : chosenBar = null);
    return chosenBar;
    }

function removeBar() {
    numbers.splice(chosenBar, 1);
    chosenBar = null;
    return numbers;
}
function changeValue(inputValue) {
    chosenBar = 3;
    if (inputValue > 10 || inputValue < 1) {
        error = 'Verdien du har lagt til må være fra og med 1 til og med 10';
    }
    else {
        error = '';
        numbers[chosenBar] = inputValue;
        inputValue = '';
    }
    return numbers;
}
function createNewBar(inputValue) {
    if (inputValue > 10 || inputValue < 1) {
        error = 'Verdien du har lagt til må være fra og med 1 til og med 10';
    }
    else {
        error = '';
        numbers.push(inputValue);
        inputValue = '';
    }
    return numbers;
}

function show() {
    
}