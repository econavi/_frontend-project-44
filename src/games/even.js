import { getRandomNum } from '../utils.js';
import runGame from '../index.js';

export const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNumber = getRandomNum(0, 101);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(evenGame, rule);
};
