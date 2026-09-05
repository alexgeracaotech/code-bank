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
const statement = [];

const operations = {
  check: () => window.alert(`Saldo atual: R$ ${balance}`),
  deposit: () => {
    const value = Number(window.prompt('Valor do depósito:'));

    if (value < 1) {
      window.alert('Digite um valor válido.');
      return operations.deposit();
    } else if (isNaN(value)) {
      window.alert('Digite um valor válido.');
      return operations.deposit();
    }

    balance += value;

    statement[statement.length] = {
      type: 'Depósito',
      value: Number(value)
    };

    window.alert(`Saldo atual: R$ ${balance}`);
  },
  cashout: () => {
    const value = Number(window.prompt('Valor do saque:'));

    if (value < 1) {
      window.alert('Digite um valor válido.');
      return operations.cashout();
    } else if (isNaN(value)) {
      window.alert('Digite um valor válido.');
      return operations.cashout();
    } else if (value > balance) {
      window.alert('Saldo indisponível.');
      return operations.cashout();
    }

    balance -= value;

    statement[statement.length] = {
      type: 'Saque',
      value: Number(value)
    };

    window.alert(`Saldo atual: R$ ${balance}`);
  },
  statement: () => {
    if (statement.length === 0) {
      return window.alert('Nenhuma transação realizada.');
    }

    let text = 'Extrato:\n\n';

    for (let i = 0; i < statement.length; i++) {
      text += `${statement[i].type} = R$ ${statement[i].value}\n`;
    }

    window.alert(text);
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
    4 - Extrato
    5 - Sair
  `);

  if (operation === null) {
    window.alert('Operaçao cancelada.');
    repeat = false;
  } else if (operation === '') {
    window.alert('Digite um número válido.');
  } else if (isNaN(operation)) {
    window.alert('Digite um número válido.');
  } else {
    switch (Number(operation)) {
      case 1: operations.check(); break;
      case 2: operations.deposit(); break;
      case 3: operations.cashout(); break;
      case 4: operations.statement(); break;
      case 5: operations.exit(); break;
      default: operations.invalid();
    }
  }
}


// 1. Não pode depositar um valor menor que 1.
// 2. Não pode depositar letra.
// 3. Não pode sacar um valor menor que 1.
// 4. Não pode sacar letra.
// 5. Não pode sacar valor maior que o da conta.
