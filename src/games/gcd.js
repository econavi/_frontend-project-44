import { runGame } from '..';
import { getRandomNum } from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const number1 = getRandomNum(0, 101);
  const number2 = getRandomNum(0, 101);
  const question = `Question: ${number1}  ${number2}`;

  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };

  const correctAnswer = (gcd(number1, number2)).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  runGame(gcdGame, rule);
};
