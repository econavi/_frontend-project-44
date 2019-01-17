import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';

export const roundsLimit = 3;
export const isEven = num => num % 2 === 0;
export const getNum = () => Math.floor(Math.random() * 100);
export const requestAnswer = () => readlineSync.question('Your answer: ');
export const showCorrectAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
export const askName = () => readlineSync.question('May I have your name? ');

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${askName()}!`);
};

const showRuls = (gameName) => {
  if (gameName === 'even') console.log('Answer "yes" if number even otherwise answer "no".');
  if (gameName === 'calc') console.log('What is the result of the expression?');
  return false;
};

const startGame = (gameName) => {
  if (gameName === 'even') return evenGame();
  if (gameName === 'calc') return calcGame();
  return false;
};

export default (gameName) => {
  console.log('Welcome to the Brain Games!');

  showRuls(gameName);

  const userName = askName();
  console.log(`Hello, ${userName}!`);

  const userIsWinner = startGame(gameName);

  if (!userIsWinner) {
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
