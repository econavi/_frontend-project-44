import { getRandomNum } from '../utils';
import { runGame } from '..';

const rule = 'What number is missing in the progression?';

const progressionGame = () => {
  const firstNum = getRandomNum(0, 51);
  const difference = getRandomNum(2, 20);
  const emptyCharPosition = getRandomNum(2, 9);
  let correctAnswer;

  const createQuestion = (num, d) => {
    let currentNumber = num;
    const iter = (counter, acc) => {
      if (counter === 10) return acc;
      currentNumber += d;

      if (counter === emptyCharPosition - 1) {
        correctAnswer = (currentNumber + d).toString();
      }

      let newAcc;
      if (counter === emptyCharPosition) {
        newAcc = `${acc} ..`;
      } else {
        newAcc = `${acc} ${currentNumber}`;
      }

      return iter(counter + 1, newAcc);
    };

    return iter(1, num.toString());
  };

  const question = createQuestion(firstNum, difference);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  runGame(progressionGame, rule);
};
