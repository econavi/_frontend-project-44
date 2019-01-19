import getRandomNum from '../utils';
import runGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = num - 1; i >= 2; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const number = getRandomNum(1, 101);
  const question = number;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(primeGame, rule);
};
