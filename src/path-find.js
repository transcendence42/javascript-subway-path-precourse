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

const getStationRoute = () => {
  return line.reduce((acc, cur, i) => {
    if (i === 1) {
      return [...acc.cost, ...cur.cost];
    }
    return [...acc, ...cur.cost];
  });
};

const findCost = ({ path }) => {
  for (let item of getStationRoute()) {
    if (
      item['ascending-pathway'] === path[0] &&
      item['descending-pathway'] === path[1]
    ) {
      return [item['path-cost'], item['time-cost']];
    }
  }
};

const calculateCost = ({ departureInput, arrivalInput, cost }) => {
  const shortPath = initDijkstra({
    departureInput,
    arrivalInput,
    cost: 'path-cost',
  });
  let path = shortPath.slice();
  let pathCost = 0;
  let timeCost = 0;
  while (path.length >= 2) {
    let cost = findCost({ path });
    pathCost += cost[0];
    timeCost += cost[1];
    path.shift();
  }
  return {pathCost, timeCost, shortPath};
};

export const pathFindFunction = ({
  departureInput,
  arrivalInput,
  radioValue,
}) => {
  return calculateCost({ departureInput, arrivalInput, radioValue });
};
