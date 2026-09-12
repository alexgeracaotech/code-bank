const exit = document.querySelector('#exit');
const check = document.querySelector('#check');
const deposit = document.querySelector('#deposit');
const cashout = document.querySelector('#cashout');
const statement = document.querySelector('#statement');

let balance = 0;
const statementList = [];

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

    statementList[statementList.length] = {
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

    statementList[statementList.length] = {
      type: 'Saque',
      value: value
    };

    window.alert(`Saldo atual: R$ ${balance}`);
  },
  statement: () => {
    if (statementList.length === 0) {
      return window.alert('Nenhuma transação realizada.');
    }

    let text = 'Extrato:\n\n';

    for (let i = 0; i < statementList.length; i++) {
      text += `${statementList[i].type} = R$ ${statementList[i].value}\n`;
    }

    window.alert(text);
  },
  exit: () => {
    const response = window.confirm('Deseja realmente sair?');

    if (!response) return;

    const username = sessionStorage.getItem('username');

    if (!username) {
      window.alert(`Foi um prazer atendê-lo.`);
    } else {
      window.alert(`Foi um prazer atendê-lo, ${username}.`);
    }

    exit.disabled = true;

    setTimeout(() => exit.textContent = 'Saindo.', 0);
    setTimeout(() => exit.textContent = 'Saindo..', 500);
    setTimeout(() => exit.textContent = 'Saindo...', 1000);
    setTimeout(() => exit.textContent = 'Saindo.', 1500);
    setTimeout(() => exit.textContent = 'Saindo..', 2000);
    setTimeout(() => exit.textContent = 'Saindo...', 2500);

    setTimeout(() => window.location.href = '../index.html', 3000);
  }
}

exit.addEventListener('click', () => operations.exit());
check.addEventListener('click', () => operations.check());
deposit.addEventListener('click', () => operations.deposit());
cashout.addEventListener('click', () => operations.cashout());
statement.addEventListener('click', () => operations.statement());
