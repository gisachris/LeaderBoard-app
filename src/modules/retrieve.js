const RetrieveScores = async () => {
  const scoresList = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nYYww3reBZgX7TQSCrxq/scores/';

  try {
    const request = await fetch(scoresList);
    const responce = await request.json();
    return responce;
  } catch (error) {
    return error;
  }
};

export default RetrieveScores;