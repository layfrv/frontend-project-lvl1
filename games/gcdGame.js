#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */
import * as f from '../src/index.js';

const text = 'Find the greatest common divisor of given numbers.';

const numb1 = () => Math.floor(Math.random() * 100);
const numb2 = () => Math.floor(Math.random() * 100);
const expression = () => `${numb1()} ${numb2()}`;

const check = (expr) => {
  const symbols = expr.split(' ');
  const a = Number(symbols[0]);
  const b = Number(symbols[1]);
  const min = a < b ? a : b;
  const result = [];
  for (let i = 1; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result.push(i);
    }
  }
  return Math.max(...result);
};

export default function gcdGame() {
  f.game(text, expression, check);
}
