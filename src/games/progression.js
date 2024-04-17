import { getRandomNum } from '../utils.js';
import runGame from '../index.js';

const amountOfElements = 10;
const rule = 'What number is missing in the progression?';

const progressionGame = () => {
  const firstNum = getRandomNum(0, 51);
  const difference = getRandomNum(2, 20);
  const emptyCharPosition = getRandomNum(2, 9);
  const correctAnswer = (firstNum + difference * emptyCharPosition).toString();

  const createQuestion = (num, d) => {
    let acc = num.toString();
    let currentNumber = num;

    for (let i = 1; i < amountOfElements; i += 1) {
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
