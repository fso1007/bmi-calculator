const button = document.querySelector('.calculator__button');
const clearButton = document.querySelector('.calculator__button-clear');
// Errors variables
const nameInputError = document.querySelector('.calculator__name-input-err');
const heightInputError = document.querySelector('.calculator__height-input-err');
const weightInputError = document.querySelector('.calculator__weight-input-err');
// Input variables
const username = document.querySelector('.calculator__name-input');
const height = document.querySelector('.calculator__height-input');
const weight = document.querySelector('.calculator__weight-input');
const textContainer = document.querySelector('.calculator__result');
// Click listeners
button.addEventListener("click", bmiCalculator);
clearButton.addEventListener("click", clearFields);

function clearFields() {
  nameInputError.style.display = 'none';
  username.style.border = 'none';
  username.value = '';
  heightInputError.style.display = 'none';
  height.style.border = 'none';
  height.value = '';
  weightInputError.style.display = 'none';
  weight.style.border = 'none';
  weight.value = '';
  textContainer.innerHTML = '';
}

function validateName() {
  if (!username.value || username.value.trim() === '') {
    nameInputError.style.display = 'block';
    username.style.border = '1px solid red';
    nameInputError.setAttribute('aria-hidden', false);
    nameInputError.setAttribute('aria-invalid', true);
    throw new Error('Empty username.');
  } else {
    nameInputError.style.display = 'none';
    username.style.border = '1px solid green';
    nameInputError.setAttribute('aria-hidden', true);
    nameInputError.setAttribute('aria-invalid', false);
  }
}

function validateHeight() {
  if (!height.value) {
    heightInputError.style.display = 'block';
    height.style.border = '1px solid red';
    heightInputError.setAttribute('aria-hidden', false);
    heightInputError.setAttribute('aria-invalid', true);
    throw new Error('Empty height value.');
  } else {
    heightInputError.style.display = 'none';
    height.style.border = '1px solid green';
    heightInputError.setAttribute('aria-hidden', true);
    heightInputError.setAttribute('aria-invalid', false);
  }
}

function validateWeight() {
  if (!weight.value) {
    weightInputError.style.display = 'block';
    weight.style.border = '1px solid red';
    weightInputError.setAttribute('aria-hidden', false);
    weightInputError.setAttribute('aria-invalid', true);
    throw new Error('Empty weight value.');
  } else {
    weightInputError.style.display = 'none';
    weight.style.border = '1px solid green';
    weightInputError.setAttribute('aria-hidden', true);
    weightInputError.setAttribute('aria-invalid', false);
  }
}

function calculateBmi() {
  const bmi = weight.value / (height.value * height.value);
  return bmi.toFixed(2);
}

function showResult() {
  let bmiValue = calculateBmi();
  let bmiStatus;
  if (bmiValue < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    bmiStatus = 'Normal Weight';
  } else if (bmiValue >= 25 && bmiValue < 30) {
    bmiStatus = 'Overweight';
  } else if (bmiValue > 30) {
    bmiStatus = 'Obesity';
  }

  let textResult = `Hi <b>${username.value}</b>, your BMI is <b>${bmiValue}</b> and your category is: <b>${bmiStatus}</b>`;

  return textContainer.innerHTML = textResult;
}

function bmiCalculator() {
  validateName();
  validateHeight();
  validateWeight();
  showResult();
}
// Export to input_mask.js
export {username, height, weight};