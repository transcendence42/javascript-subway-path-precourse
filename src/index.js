import { station, line } from './data.js';
import { controller } from './controller.js';

function App() {
  controller();
  console.log(station, line);
}

App();
