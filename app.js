let repeat = true;

function greet() {
  const username = window.prompt('Digite seu nome:');

  if (!username) {
    if (username !== '') {
      repeat = false;
      return window.alert('Operação cancelada.');
    }

    return window.alert(`Olá! Seja bem vindo.`);
  }

  window.alert(`Olá, ${username}! Seja bem vindo.`);
}

greet();

let balance = 0;

const operations = {
  check: () => window.alert(`Saldo atual: R$ ${balance}`),
  deposit: () => {
    const value = Number(window.prompt('Valor do depósito:'));

    balance += value;

    window.alert(`Saldo atual: R$ ${balance}`);
  },
  cashout: () => {
    const value = Number(window.prompt('Valor do saque:'));

    balance -= value;

    window.alert(`Saldo atual: R$ ${balance}`);
  },
  exit: () => {
    window.alert('Foi um prazer atendê-lo.');
    repeat = false;
  },
  invalid: () => window.alert('Número inválido.')
}

while (repeat) {
  const operation = window.prompt(`
    Escolha uma operação:
  
    1 - Consultar
    2 - Depositar
    3 - Sacar
    4 - Sair
  `);

  if (operation === null) {
    window.alert('Operaçao cancelada.');
    repeat = false;
  } else if (operation === '') {
    window.alert('Digite um número válido.');
  } else if (isNaN(operation)) {
    window.alert('Digite um número válido.');
  }

  switch (Number(operation)) {
    case 1: operations.check(); break;
    case 2: operations.deposit(); break;
    case 3: operations.cashout(); break;
    case 4: operations.exit(); break;
    default: operations.invalid();
  }
}
