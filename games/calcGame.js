#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { 
  greeting, userName, description, question, askAnswer, final,
} from '../src/index.js';

export default function calcGame() {
  greeting();
  const name = userName();
  description('What is the result of the expression?');

  let expression;

  const doExpression = () => {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 10);
    const operator = ['+', '-', '*'];
    const getRandomOperator = operator[Math.floor(Math.random() * operator.length)];
    expression = `${firstNumber} ${getRandomOperator} ${secondNumber}`;

    const operaton = (n) => {
      if (n === '+') {
        return firstNumber + secondNumber;
      } if (n === '-') {
        return firstNumber - secondNumber;
      } 
      return firstNumber * secondNumber;
    };
        
    const result = operaton(getRandomOperator);
    return result;
  };

  let checkResult = 0;

  const game = () => {
    const result = doExpression();
    //console.log(result); 
    question(expression);
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
