import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor((min + Math.random() * (max - min)));

const askName = () => readlineSync.question('May I have your name? ');

const requestAnswer = () => readlineSync.question('Your answer: ');

export { getRandomNum, askName, requestAnswer };
