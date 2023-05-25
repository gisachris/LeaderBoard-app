// select sections of the page
const appsection = document.querySelector('.appsection');
const scoreHeader = document.querySelector('.scoreHeader');
const scoresList = document.querySelector('.scoresList');
const refreshScores = document.querySelector('.refreshScores');

// placing elements within the page
appsection.style.display = 'flex';
appsection.style.columnGap = '20px';
scoreHeader.style.display = 'flex';
scoreHeader.style.columnGap = '10px';
scoreHeader.style.height = 'auto';
scoresList.style.listStyleType = 'none';
scoresList.style.border = '3px solid black';
scoresList.style.marginTop = '0px';
scoresList.style.borderRadius = '5px';
scoresList.style.paddingLeft = '0';
refreshScores.style.height = '30px';
refreshScores.style.marginTop = '20px';
