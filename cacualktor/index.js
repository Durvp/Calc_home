let display = document.getElementById('display');
let history = document.getElementById('history');
let historyButton = document.getElementById('historyButton');
let historyVisible = false;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        if (!isNaN(result)) {
            history.innerHTML += `<div class="history-item">${display.value}</div>`;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleHistory() {
    if (historyVisible) {
        history.classList.add('hidden');
    } else {
        history.classList.remove('hidden');
    }
    historyVisible = !historyVisible;
}

// Selecting equation from history and putting it back into the calculator
history.addEventListener('click', function(event) {
    if (event.target.classList.contains('history-item')) {
        let equation = event.target.textContent;
        display.value = equation;
    }
});
