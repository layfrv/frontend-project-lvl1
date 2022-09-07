#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */
import readlineSync from 'readline-sync';
import {
  greeting, userName, description, question, askAnswer, final,
} from '../src/index.js';

export default function primeGame() {
  greeting();
  const name = userName();
  description('Answer "yes" if given number is prime. Otherwise answer "no".');
  let checkResult = 0;

  const game = () => {
    const number = Math.floor(Math.random() * 100);
    const isPrime = (n) => {
      for (let i = 2; i <= n / 2; i += 1) {
        if (n % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const result = isPrime(number);

    question(number);
    const answer = askAnswer();

    if (answer == result) {
      console.log('Correct!');
    } else {
      checkResult = 1;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
  };
  
  for (let i = 1; i <= 3; i += 1) {
    if (checkResult === 0 && i === 3) {
      game();
      final(name);
    } else if (checkResult === 0) {
      game();
    }
  }
}
