// imports
import { create } from 'lodash';
import diplayContent from './display.js';

//create the game
const createGame = async () => {
  const GameResource = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const init = {
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({'name': 'The Chris Game'})
  }
  try {
  const request = await fetch(GameResource,init);
  const responce = await request.json();
  console.log(responce);
  } catch(error) {
    console.log(error);
  }
}

// select from the dom
const NameInput = document.querySelector('.InputName');
const ScoreInput = document.querySelector('.Inputscore');
const AddButton = document.querySelector('.submitScores');

const validator = () => {
  const nameData = NameInput.value;
  const scoreData = ScoreInput.value;
  if (nameData === '' || scoreData === '') {
    return true;
  }
  return false;
};

const clear = () => {
  NameInput.value = '';
  ScoreInput.value = '';
};

const createScore = async () => {
  const nameValue = NameInput.value;
  const scoreValue = ScoreInput.value;
  const scoresList = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lE7dGkUhT4iH7WytJXho/scores/';
  const init = {
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({'user':nameValue,'score':scoreValue})
  }
  try {
    const request = await fetch(scoresList,init);
    const responce = await request.json();
    console.log(responce);
  } catch(error) {
    console.log(error);
  }
}  

// eventlistener for button
AddButton.addEventListener('click',async () => {
  if (validator()) {
    return;
  }
  await createScore();
  diplayContent();
  clear();
});

// eventlistener for enterkey
document.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    if (validator()) {
      return;
    }
    await createScore();
    diplayContent();
    clear();
  }
});
