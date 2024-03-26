const inputField = document.getElementById('input-field');
const calculateButton = document.getElementById('calculate-button');
const outputArea = document.getElementById('output-area');

calculateButton.addEventListener('click', () => {
  const inputValue = inputField.value.trim();

  if (/^\d+$/.test(inputValue)) {
    const number = parseInt(inputValue);

    if (number >= 0) {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }

      outputArea.textContent = `The factorial of ${number} is ${result}.`;
    } else {
      outputArea.textContent = 'Please enter a non-negative integer.';
    }
  } else {
    outputArea.textContent = 'Please enter a valid integer.';
  }
});