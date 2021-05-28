const submitEvent = () => {
    const departureInput = document.getElementById('departure-station-name-input');
    const arrivalInput = document.getElementById('arrival-station-name-input');
    const radios = document.getElementsByName('search-type');

    console.log(departureInput, arrivalInput, radios[0])

}

export const controller = () => {
  document.getElementById('search-button').addEventListener('click', ()=>submitEvent())
};
