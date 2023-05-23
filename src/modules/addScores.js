//imports
import scoreHolder from "../index.js";
import diplayContent from "./display.js";

//select from the dom
const NameInput = document.querySelector('.InputName');
const ScoreInput = document.querySelector('.Inputscore');
const AddButton = document.querySelector('.submitScores');

//create a score
const ScoreCreator = () => {
  class ScoreObj {
    constructor (name,score){
      this.index = scoreHolder.length;
      this.name = name;
      this.score = score;
    }
  }

  const name = NameInput.value;
  const marks = ScoreInput.value;
  const score = new ScoreObj(name,marks);
  scoreHolder.push(score);
}

const validator = () => {
  let nameData = NameInput.value;
  let scoreData = ScoreInput.value;
  if(nameData === '' || scoreData === ''){
   return true;
  }
  return false;
}

const clear = () => {
  NameInput.value = '';
  ScoreInput.value = '';
}

//eventlistener for button
AddButton.addEventListener('click', () => {
  if(validator()){
    return;
  }
  ScoreCreator();
  diplayContent();
  clear();
  console.log(scoreHolder);
})

//eventlistener for enterkey 
document.addEventListener('keyup', function(event){
if(event.key === 'Enter'){
  if(validator()){
    return;
  }
  ScoreCreator();
  diplayContent();
  clear();
  console.log(scoreHolder);
}
})
