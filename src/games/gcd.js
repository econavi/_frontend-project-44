import {
  roundsLimit, getNum, requestAnswer, showCorrectAnswer,
} from '..';

export default () => {
  const iterRound = (limit) => {
    if (limit < 1) return true;

    const number1 = getNum();
    const number2 = getNum();

    const gcd = (a, b) => {
      if (b === 0) return Math.abs(a);
      return gcd(b, a % b);
    };

    const question = `Question: ${number1}  ${number2}`;
    console.log(question);
    const correctAnswer = gcd(number1, number2);

    const answer = requestAnswer();

    if (+answer !== correctAnswer) {
      console.log(question);
      console.log(`Your answer: ${answer}`);
      showCorrectAnswer(answer, correctAnswer);
      return false;
    }

    console.log('Correct!');
    return iterRound(limit - 1);
  };

  return iterRound(roundsLimit);
};
