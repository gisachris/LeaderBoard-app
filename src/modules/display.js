import RetrieveScores from './retrieve.js';

const scoresList = document.querySelector('.scoresList');

window.addEventListener('load',RetrieveScores);

const displayContent = async () => {
  if (!scoresList) {
    return;
  }

  try {
    const scores = await RetrieveScores();
    const { result } = scores;

    scoresList.innerHTML = '';
    result.forEach((obj, index) => {
      const li = document.createElement('li');
      li.classList.add('listInstance');
      li.setAttribute('data-index', index);
      li.textContent = `${obj.user}: ${obj.score}`;
      scoresList.appendChild(li);
      if(index % 2 !== 0){
        li.style.backgroundColor = '#d5d5d5';
      }
    });
  } catch (error) {
    console.log(error);
  }
};


export default displayContent;
