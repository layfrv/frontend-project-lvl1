import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const description = (text) => console.log(`${text}`);

const question = (expression) => console.log(`Question: ${expression} `);
const answer = () => readlineSync.question('Your answer: ');

const successFinal = (name) => console.log(`Congratulations, ${name}!`);
const unsuccessFinal = (answer1, result, name) => console.log(`'${answer1}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);

const userAnswer = () => answer();

const rounds = (expression, name, check) => {
  for (let i = 1; i <= 3; i += 1) {
    const numb = expression();
    question(numb);
    const finAnswer = userAnswer();
    const rightAnswer = check(numb);

    if (finAnswer == rightAnswer && i < 3) {
      console.log('Correct!');
    } else if (finAnswer == rightAnswer && i === 3) {
      return successFinal(name);
    } else {
      return unsuccessFinal(finAnswer, rightAnswer, name);
    }
  }
};

const game = (text, expression, check) => {
  greeting();
  const name = userName();
  description(text);
  rounds(expression, name, check);
};

export {
  greeting, userName, description, question, answer,
  successFinal, unsuccessFinal, userAnswer, rounds, game,
};
