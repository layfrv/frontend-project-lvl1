#!/usr/bin/env node
/* eslint-disable keyword-spacing */
// eslint-disable-next-line import/extensions, import/named
import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const name = getName();
  console.log(`Hello, ${name}!`);

  const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
  description();

  const game = () => {
    for (let i = 0; i < 3; i += 1) {
      const number = Math.floor(Math.random() * 100);

      const question = () => console.log(`Question: ${number} `);
      question();
      const answer = readlineSync.question('Your answer: ');

      const isEven = () => (number % 2 === 0);

      if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
        console.log('Correct!');
      } else {
        const opposite = answer === 'yes' ? 'no' : 'yes';
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };

  game();
}
