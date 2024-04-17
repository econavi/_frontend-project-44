import { askName } from './utils.js';

export default function sayHello() {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
}
