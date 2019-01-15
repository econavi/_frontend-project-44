import readlineSync from 'readline-sync';

const roundsLimit = 3;
let userName = '';
let userIsWinner = 'false';

const showWelcome = () => console.log(`Welcome to the Brain Games!`);
const showRules = () => console.log(`Answer "yes" if number even otherwise answer "no".`);
const sayYouIsWinner = () => console.log(`Congratulations, ${userName}!`);
const sayHello = (name) => console.log(`Hello, ${name}!`);
const insertDelimiter = () => console.log('\n');
const askQuestion = (data) => console.log(`Question: ${data}`);
const getAnswer = () => readlineSync.question(`Your answer: `).toLowerCase();
const sayCorrect = () => console.log(`Correct!`);
const askName = () => {
  userName = readlineSync.question(`May I have your name? `);
};
const sayYouLose = (answer, correct) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const getRound = () => {
  const iterRound = (limit) => {
    const number = Math.floor(Math.random() * 100);
    askQuestion(number);
    
    const answer = getAnswer();
    if (number % 2 === 0 && answer !== 'yes') {
      userIsWinner = false;
      sayYouLose(answer, 'yes');
      return;
    }
    if (number % 2 !== 0 && answer !== 'no') {
      userIsWinner = false;
      sayYouLose(answer, 'no');
      return;
    }
    
    sayCorrect();
    userIsWinner = true;
    if (limit > 1) iterRound(limit - 1);
  };
  
  iterRound(roundsLimit);
  if (userIsWinner) sayYouIsWinner();
};

export default () => {
  insertDelimiter();
  showWelcome();
  showRules();
  insertDelimiter();
  
  askName();
  sayHello(userName);
  insertDelimiter();
  
  getRound();
};
