#!/usr/bin/env node
import * as f from '../src/index.js';

const text = 'What number is missing in the progression?';

let hiddenNumber;

const expression = () => {
  const numbers = [];
  const firstNumber = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);

  for (let i = firstNumber; numbers.length < 10; i += step) {
    numbers.push(i);
  }

  const numberToHide = Math.floor(Math.random() * 10);
  hiddenNumber = numbers[numberToHide];
  numbers[numberToHide] = '..';
  const progressionStr = numbers.join(' ');

  return progressionStr;
};

const check = () => hiddenNumber;

export default function progressionGame() {
  f.greeting();
  const name = f.userName();
  f.description(text);
  f.rounds(expression, name, check);
}
