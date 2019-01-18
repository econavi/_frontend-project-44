import readlineSync from 'readline-sync';

const roundsLimit = 3;

const askName = () => readlineSync.question('May I have your name? ');
const requestAnswer = () => readlineSync.question('Your answer: ');

export const runGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const userName = askName();
  console.log(`Hello, ${userName}!`);

  const iterRound = (limit) => {
    if (limit < 1) return true;

    const data = game();
    const { question } = data;
    const { correctAnswer } = data;

    console.log(`Question: ${question}`);
    const userAnswer = requestAnswer().toLowerCase();

    if (userAnswer !== data.correctAnswer) {
      console.log(`Question: ${question}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return iterRound(limit - 1);
  };

  const winner = iterRound(roundsLimit);
  if (!winner) return;
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${askName()}!`);
};
