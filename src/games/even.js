import {
  roundsLimit, isEven, getNum, requestAnswer, showCorrectAnswer,
} from '..';

export default () => {
  const iterRound = (limit) => {
    if (limit < 1) return true;

    const question = getNum();
    console.log(`Question: ${question}`);
    const answer = requestAnswer().toLowerCase();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      showCorrectAnswer(answer, correctAnswer);
      return false;
    }

    console.log('Correct!');
    return iterRound(limit - 1);
  };

  return iterRound(roundsLimit);
};
