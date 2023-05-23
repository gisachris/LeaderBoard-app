import _ from 'lodash';
import './style.css';
import './modules/addScores.js';
import displayContent from './modules/display.js';

const scoreHolder = [];
export default scoreHolder;

window.addEventListener('load', displayContent);