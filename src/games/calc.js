import { getRandomNum } from '../utils.js';
import runGame from '../index.js';

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const operator = getRandomNum(1, 4);
  const operand1 = getRandomNum(0, 101);
  const operand2 = getRandomNum(0, 101);
  let question = '';
  let correctAnswer = '';

  switch (operator) {
    case 1:
      question = `${operand1} + ${operand2}`;
      correctAnswer += (operand1 + operand2);
      break;
    case 2:
      question = `${operand1} - ${operand2}`;
      correctAnswer += (operand1 - operand2);
      break;
    default:
      question = `${operand1} * ${operand2}`;
      correctAnswer += (operand1 * operand2);
      break;
  }

  return { question, correctAnswer };
};

export default () => {
  runGame(calcGame, rule);
};
