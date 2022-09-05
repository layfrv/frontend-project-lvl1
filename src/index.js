import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const description = (text) => console.log(`${text}`);

export const question = (number) => console.log(`Question: ${number} `);
export const askAnswer = () => readlineSync.question('Your answer: ');

export const final = (name) => console.log(`Congratulations, ${name}!`);
