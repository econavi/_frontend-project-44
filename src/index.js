import { askName, requestAnswer } from './utils.js';

const roundsLimit = 3;

const runGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = askName();
  console.log(`Hello, ${userName}!`);

  const iterRound = (limit) => {
    if (limit < 1) return true;

    const { question, correctAnswer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = requestAnswer().toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');

    return iterRound(limit - 1);
  };

  const isWin = iterRound(roundsLimit);

  if (!isWin) {
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
