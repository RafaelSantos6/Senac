function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 + num2;
}

function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 - num2;
}
function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 / num2;
}
function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 * num2;
}

function Pot(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 ** num2;
}

function Raiz(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 ** num2;
}

module.exports = {
  sum,
  sub,
  div,
  mult,
  Pot,
  Raiz
};

