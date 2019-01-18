import getRandomNum from '../utils';
import runGame from '..';

const rule = 'What number is missing in the progression?';

const progressionGame = () => {
  const charsLength = 10;
  const firstNum = getRandomNum(0, 51);
  const difference = getRandomNum(2, 20);
  const emptyCharPosition = getRandomNum(2, 9);
  const correctAnswer = (firstNum + difference * emptyCharPosition).toString();

  const createQuestion = (num, d) => {
    let acc = num.toString();
    let currentNumber = num;

    for (let i = 1; i < charsLength; i += 1) {
      currentNumber += d;
      if (i === emptyCharPosition) {
        acc = `${acc} ..`;
      } else {
        acc = `${acc} ${currentNumber}`;
      }
    }

    return acc;
  };

  const question = createQuestion(firstNum, difference);

  return { question, correctAnswer };
};

export default () => {
  runGame(progressionGame, rule);
};
