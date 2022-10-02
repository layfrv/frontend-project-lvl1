const firstNumber = Math.floor(Math.random() * 100);
const secondNumber = Math.floor(Math.random() * 10);
const operator = ['+', '-', '*'];
const getRandomOperator = operator[Math.floor(Math.random() * operator.length)];
const expression = `${firstNumber} ${getRandomOperator} ${secondNumber}`;

const check = (b) => {
  const symbols = b.split(' ');
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

console.log(check(expression));
