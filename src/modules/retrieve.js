const RetrieveScores  = async () => {
  const scoresList = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lE7dGkUhT4iH7WytJXho/scores/';

  try {
    const request = await fetch(scoresList);
    const responce = await request.json();
    console.log(responce);
    return responce;
  } catch (error) {
    console.log(error);
  }
};

export default RetrieveScores;