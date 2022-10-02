#!/usr/bin/env node
import * as f from '../src/index.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no"';

const numb = () => Math.floor(Math.random() * 100);

const check = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function evenGame() {
  f.greeting();
  const name = f.userName();
  f.description(text);
  f.rounds(numb, name, check);
}
