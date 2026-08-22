function greet() {
  const username = window.prompt('Digite seu nome:');

  if (!username) {
    if (username !== '')
      return window.alert('Operação cancelada.');

    return window.alert(`Olá! Seja bem vindo.`);
  }

  window.alert(`Olá, ${username}! Seja bem vindo.`);
}

greet();
