//selecting from the Dom
const refreshButton = document.querySelector('.refreshScores');
const addButton = document.querySelector('.submitScores');
const parentModal = document.querySelector('.parentModal');
const refreshed = document.querySelector('.refreshed');
const refreshTextHolder = document.querySelector('.refreshTextHolder');
const nameInput = document.querySelector('.InputName');
const scoreInput = document.querySelector('.Inputscore');
const nameError = document.querySelector('.nameError');
const scoreError = document.querySelector('.scoreError');

//changing function
const refresher = () => {
  const duration1 = 800;
    const duration2 = 10000;
    
    parentModal.classList.remove('parentModal');
    parentModal.classList.add('animateParent');

    setTimeout(() =>{
    parentModal.classList.remove('animateParent');
    parentModal.classList.add('parentModal');
    },duration1);

    refreshed.classList.remove('refreshed');
    refreshed.classList.add('on');
    refreshTextHolder.classList.remove('refreshTextHolder');
    refreshTextHolder.classList.add('animateHolder');

    setTimeout(() => {
      refreshed.classList.remove('on');
      refreshed.classList.add('refreshed');
      refreshTextHolder.classList.remove('animateHolder');
      refreshTextHolder.classList.add('refreshTextHolder');
    },duration2)
}

//validation
const errorValidator = () => {
  const nameValue = nameInput.value;
  const scoreValue = scoreInput.value;

  if(nameValue === '') {
    nameError.classList.remove('nameError');
    nameError.classList.add('viewError');
  }else if (scoreValue === '') {
    scoreError.classList.remove('scoreError');
    scoreError.classList.add('viewError');
  }else {
    nameError.classList.remove('viewError');
    nameError.classList.add('nameError');
    scoreError.classList.remove('viewError');
    scoreError.classList.add('scoreError');
  } 
}

addButton.addEventListener('click',() => {
  errorValidator();
})

refreshButton.addEventListener('click', () => {
  refresher();
})
