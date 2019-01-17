import {
  roundsLimit, getNum, requestAnswer, showCorrectAnswer,
} from '..';

export default () => {
  const iterRound = (limit) => {
    if (limit < 1) return true;

    const operator = Math.floor(Math.random() * 3 + 1);
    const operand1 = getNum();
    const operand2 = getNum();

    let question = '';
    let correctAnswer = 0;

    switch (operator) {
      case 1:
        question = `Question: ${operand1} + ${operand2}`;
        console.log(question);
        correctAnswer = operand1 + operand2;
        break;
      case 2:
        question = `Question: ${operand1} - ${operand2}`;
        console.log(question);
        correctAnswer = operand1 - operand2;
        break;
      case 3:
        question = `Question: ${operand1} * ${operand2}`;
        console.log(question);
        correctAnswer = operand1 * operand2;
        break;
      default:
        break;
    }

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
