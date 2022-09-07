#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  greeting, userName, description, question, askAnswer, final,
} from '../src/index.js';

export default function progressionGame() {
  greeting();
  const name = userName();
  description('What number is missing in the progression?');
  let checkResult = 0;

  const game = () => {
    const getProgressionArray = () => {
      const numbers = [];
      const firstNumber = Math.floor(Math.random() * 10);
      const step = Math.floor(Math.random() * 10);

      for (let i = firstNumber; numbers.length < 10; i += step) {
        numbers.push(i);
      }
      
      return numbers;
    };
    
    const numbers = getProgressionArray();
    const hiddenNumber = Math.floor(Math.random() * 10);
    //console.log(hiddenNumber);
    const result = numbers[hiddenNumber];
    numbers[hiddenNumber] = '..';
    const progressionStr = numbers.join(' ');

    question(progressionStr);
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
