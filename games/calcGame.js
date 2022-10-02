#!/usr/bin/env node
import * as f from '../src/index.js';

const text = 'What is the result of the expression?';
const firstNumber = () => Math.floor(Math.random() * 100);
const secondNumber = () => Math.floor(Math.random() * 10);
const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];
const expression = () => `${firstNumber()} ${getRandomOperator()} ${secondNumber()}`;

const check = (expr) => {
  const symbols = expr.split(' ');
  const firstNumb = Number(symbols[0]);
  const sign = symbols[1];
  const secondNumb = Number(symbols[2]);

  const operaton = (n) => {
    switch (n) {
      case '+':
        return firstNumb + secondNumb;
      case '-':
        return firstNumb - secondNumb;
      case '*':
        return firstNumb * secondNumb;
      default:
        return null;
    }
  };

  return operaton(sign);
};

export default function calcGame() {
  f.game(text, expression, check);
}
