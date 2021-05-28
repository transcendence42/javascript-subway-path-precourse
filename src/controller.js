import { pathFindFunction } from './path-find.js';
import { checkValidInput } from './check.js';

const renderCost = (pathCost, timeCost) => {
  document
    .getElementsByTagName('tbody')[0]
    .insertAdjacentHTML('afterbegin', `<tr><td>${pathCost}km</td><td>${timeCost}분</td></tr>`);
};

const renderRoute = (shortPath) => {
  document
    .getElementsByTagName('tbody')[0]
    .insertAdjacentHTML('beforeend', `<tr><td colspan='2'>${shortPath.join('➜')}</td></tr>`);
};

const render = (result) => {
  renderCost(result.pathCost, result.timeCost);
  renderRoute(result.shortPath);
};

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
  if (!checkValidInput({ departureInput, arrivalInput })) {
    return;
  }
  render(pathFindFunction({ departureInput, arrivalInput, radioValue }));
};

export const controller = () => {
  document
    .getElementById('search-button')
    .addEventListener('click', () => submitEvent());
};
