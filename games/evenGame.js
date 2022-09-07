#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */
import readlineSync from 'readline-sync';
import { 
  greeting, userName, description, question, askAnswer, final,
} from '../src/index.js';

export default function evenGame() {
  greeting();
  const name = userName();
  description('Answer "yes" if the number is even, otherwise answer "no".');

  const game = () => {
    for (let i = 0; i < 3; i += 1) {
      const number = Math.floor(Math.random() * 100);

      question(number);
      const answer = askAnswer();

      const isEven = () => (number % 2 === 0);

      if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
        console.log('Correct!');
      } else {
        const opposite = answer === 'yes' ? 'no' : 'yes';
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${name}!`);
        return;
      }
    }
    final(name);
  };
  game();
}
