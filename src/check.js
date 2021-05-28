import { station, line } from './data.js';

// const checkValidLine = ({ departureInput, arrivalInput }) => {
//   return line.filter(
//     (x) =>
//       x.station.includes(departureInput) && x.station.includes(arrivalInput),
//   ).length;
// };

const checkValidStation = (value) => {
  if (value.length < 2) {
    alert('출발역과 도착역은 2글자 이상이어야 합니다.');
    return false;
  }
  if (!station.includes(value)) {
    alert('존재하지 않는 역을 출발역 또는 도착역으로 입력할 수 없습니다.');
    return false;
  }
  return true;
};

export const checkValidInput = ({ departureInput, arrivalInput }) => {
  if (departureInput === arrivalInput) {
    alert('경로 조회 시 출발역과 도착역이 같을 수 없습니다.');
    return false;
  }
  if (!checkValidStation(departureInput)) {
    return false;
  }
  if (!checkValidStation(arrivalInput)) {
    return false;
  }
  // if (!checkValidLine({ departureInput, arrivalInput })) {
  //   alert(
  //     '경로 조회 시 출발역과 도착역이 연결되지 않으면 경로를 조회할 수 없습니다.',
  //   );
  //   return false;
  // }
  return true;
};
