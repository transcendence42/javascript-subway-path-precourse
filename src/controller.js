import {checkValidInput} from './check.js';

const submitEvent = () => {
  const departureInput = document.getElementById(
    'departure-station-name-input',
  ).value;
  const arrivalInput = document.getElementById(
    'arrival-station-name-input',
  ).value;
  const radioValue = [...document.getElementsByName('search-type')].find(
    (x) => x.checked,
  ).value;
  if (!checkValidInput(departureInput, arrivalInput)) {
    return ;
  }
  console.log(departureInput, arrivalInput, radioValue);
};

export const controller = () => {
  document
    .getElementById('search-button')
    .addEventListener('click', () => submitEvent());
};
