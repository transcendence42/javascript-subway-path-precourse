import Dijkstra from './utils/Dijkstra.js';

import { station, line } from './data.js';

const initDijkstra = ({ departureInput, arrivalInput, cost }) => {
  const dijkstra = new Dijkstra();
  line.map((x) => {
    x.cost.map((v) => {
      dijkstra.addEdge(
        v['ascending-pathway'],
        v['descending-pathway'],
        v[cost],
      );
    });
  });
  return dijkstra.findShortestPath(departureInput, arrivalInput);
};

const calculatePathCost = ({ departureInput, arrivalInput }) => {
  const line = initDijkstra({
    departureInput,
    arrivalInput,
    cost: 'path-cost',
  });
  console.log(line);
};

const calculateTimeCost = ({ departureInput, arrivalInput }) => {
  const line = initDijkstra({
    departureInput,
    arrivalInput,
    cost: 'time-cost',
  });
  console.log(line);
};

export const pathFindFunction = ({
  departureInput,
  arrivalInput,
  radioValue,
}) => {
  if (radioValue === '최단시간') {
    calculatePathCost({ departureInput, arrivalInput });
  } else if (radioValue === '최단거리') {
    calculateTimeCost({ departureInput, arrivalInput });
  }
};
