import { runGame } from '..';
import readlineSync from 'readline-sync';

const getNum = () => Math.floor(Math.random() * 100);
const requestAnswer = () => readlineSync.question('Your answer: ');

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const operator = Math.floor(Math.random() * 3 + 1);
  const operand1 = getNum();
  const operand2 = getNum();
  let question = '';
  let correctAnswer = 0;

  switch (operator) {
    case 1:
      question = `Question: ${operand1} + ${operand2}`;
      correctAnswer = (operand1 + operand2).toString();
      break;
    case 2:
      question = `Question: ${operand1} - ${operand2}`;
      correctAnswer = (operand1 - operand2).toString();
      break;
    case 3:
      question = `Question: ${operand1} * ${operand2}`;
      correctAnswer = (operand1 * operand2).toString();
      break;
    default:
      break;
  }

  console.log(question);
  const userAnswer = requestAnswer();

  return {
    question,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  runGame(calcGame, rule);
};
