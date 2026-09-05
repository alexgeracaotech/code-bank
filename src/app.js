const logout = document.querySelector('#logout');
const start = document.querySelector('#start');

logout.addEventListener('click', () => {
  window.location.href = '../index.html';
});

start.addEventListener('click', () => {
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
      const response = window.prompt('Valor do depósito:');

      if (response === null) return window.alert('Operação cancelada.');

      const value = Number(response);

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
        value: value
      };

      window.alert(`Saldo atual: R$ ${balance}`);
    },
    cashout: () => {
      const response = window.prompt('Valor do saque:');

      if (response === null) return window.alert('Operação cancelada.');

      const value = Number(response);

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
        value: value
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
      const response = window.confirm('Deseja realmente sair?');

      if (!response) return;

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
      const response = window.confirm('Deseja realmente cancelar?');

      if (!response) continue;

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
});