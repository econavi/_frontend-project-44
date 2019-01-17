import readlineSync from 'readline-sync';

const roundsLimit = 3;
const isEven = num => num % 2 === 0;

const startGame = () => {
  const iterRound = (limit) => {
    if (limit < 1) return true;

    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false; // eslint-disable-line consistent-return
    }

    console.log('Correct!');
    return iterRound(limit - 1);
  };

  return iterRound(roundsLimit);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const userIsWinner = startGame();

  if (!userIsWinner) {
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
