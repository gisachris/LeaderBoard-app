import _ from 'lodash';
import './style.css';
import './modules/addScores.js';
import displayContent from './modules/display.js';
import './modules/placement.js';

const scoreHolder = [
  { index: 0, name: 'Name', score: 100 },
  { index: 1, name: 'Name', score: 70 },
  { index: 2, name: 'Name', score: 230 },
  { index: 3, name: 'Name', score: 50 },
  { index: 4, name: 'Name', score: 10 },
];
export default scoreHolder;

window.addEventListener('load', displayContent);