#!/usr/bin/env node
/* eslint-disable indent */
/* eslint-disable keyword-spacing */
// eslint-disable-next-line import/extensions, import/named
import readlineSync from 'readline-sync';
import {
  greeting, userName, description, question, askAnswer, final,
} from '../src/index.js';

export default function gcdGame() {
  greeting();
  const name = userName();
  description('Find the greatest common divisor of given numbers.');
  let checkResult = 0;

    const game = () => {
        const numb1 = Math.floor(Math.random() * 100);
        const numb2 = Math.floor(Math.random() * 100);
        //console.log(numb1, numb2)

        const findResult = (a, b) => {
            const min = a < b ? a : b;
            const result = [];
            for (let i = 1; i <= min; i += 1) {
                if (a % i === 0 && b % i === 0) {
                    result.push(i);
                }
            }
            return Math.max(...result);
        };

        const result = findResult(numb1, numb2);
        //console.log(result);

        question(`${numb1} ${numb2}`);
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
};
