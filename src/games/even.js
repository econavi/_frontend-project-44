import { runGame } from '..';
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const getNum = () => Math.floor(Math.random() * 100);
const requestAnswer = () => readlineSync.question('Your answer: ');
const rule = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const randomNumber = getNum();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  console.log(question);
  const userAnswer = requestAnswer().toLowerCase();

  return {
    question,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  runGame(evenGame, rule);
};
