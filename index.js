const button = document.querySelector('button');

function greet() {
  const username = window.prompt('Digite seu nome:');

  if (!username) {
    if (username !== '')
      return window.alert('Operação cancelada.');

    window.alert(`Olá! Seja bem vindo.`);
    window.sessionStorage.setItem('username', username);
    return window.location.href = './src/app.html';
  }

  window.alert(`Olá, ${username}! Seja bem vindo.`);

  window.sessionStorage.setItem('username', username);
  window.location.href = './src/app.html';
}

button.addEventListener('click', () => greet());


