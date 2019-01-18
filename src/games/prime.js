import getRandomNum from '../utils';
import runGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const number = getRandomNum(1, 101);
  const question = number;

  const isPrime = (num) => {
    if (num < 2) return false;

    let res = true;

    for (let i = num - 1; i >= 2; i -= 1) {
      if (num % i === 0) {
        res = false;
        break;
      }
    }

    return res;
  };

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(primeGame, rule);
};
