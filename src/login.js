const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const error = document.querySelector('span');

const user = {
  email: 'admin@email.com',
  password: 'admin'
}


button.addEventListener('click', (event) => {
  event.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === '' || passwordValue === '')
    return window.alert('Todos campos precisam ser preenchidos.');

  if (emailValue !== user.email || passwordValue !== user.password)
    return window.alert('E-mail e/ou senha incorretos.');

  window.alert('Acesso permitido.');

  window.location.href = './app.html';
});
