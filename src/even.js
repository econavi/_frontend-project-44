import readlineSync from 'readline-sync';

const roundsLimit = 3;
const isEven = num => num % 2 === 0;
const insertDelimiter = () => console.log('\n');

const startGame = (userName) => {
  let userIsWinner = 'false';

  const iterRound = (limit) => {
    if (limit < 1) return;

    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      userIsWinner = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');
    userIsWinner = true;
    iterRound(limit - 1);
  };

  iterRound(roundsLimit);
  if (userIsWinner) console.log(`Congratulations, ${userName}!`);
};

export default () => {
  insertDelimiter();
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  insertDelimiter();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  insertDelimiter();

  startGame(userName);
};
