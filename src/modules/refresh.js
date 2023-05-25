//import refresh function
import displayContent from "./display.js"; 

//select refresh button
const refreshButton = document.querySelector('.refreshScores');

//eventlistener to the button
refreshButton.addEventListener('click',() => {
  displayContent();
});