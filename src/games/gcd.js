import { runGame } from '..';
import readlineSync from 'readline-sync';

const getNum = () => Math.floor(Math.random() * 100);
const requestAnswer = () => readlineSync.question('Your answer: ');

const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const number1 = getNum();
  const number2 = getNum();
  const question = `Question: ${number1}  ${number2}`;

  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };

  const correctAnswer = (gcd(number1, number2)).toString();

  console.log(question);
  const userAnswer = requestAnswer();

  return {
    question,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  runGame(gcdGame, rule);
};
