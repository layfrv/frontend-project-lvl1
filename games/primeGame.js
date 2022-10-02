#!/usr/bin/env node
import * as f from '../src/index.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const expression = () => Math.floor(Math.random() * 100);

const check = (n) => {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default function primeGame() {
  f.game(text, expression, check);
}
