const display = document.querySelector('.calc-dispaly');

const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach(button => button.addEventListener('click', function() {
  const value = button.textContent;
  const resultEl = button.classList.contains('result-btn');
  const clearEl= button.classList.contains('clear-btn');

  if (!resultEl && !clearEl) {
    appendToDisplay(value);
  } else if (resultEl) {
    calculate();
  } else if (clearEl) {
    clearDisplay();
  }
}))

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}