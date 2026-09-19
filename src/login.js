const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const error = document.querySelector('span');

const users = JSON.parse(sessionStorage.getItem('database'));

const user = {};

button.addEventListener('click', (event) => {
  event.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === '' || passwordValue === '')
    return window.alert('Todos campos precisam ser preenchidos.');

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailValue && users[i].password === passwordValue) {
      user.name = users[i].name;
      user.email = users[i].email;
      user.password = users[i].password;
    }
  }

  if (!user.email || !user.password)
    return window.alert('E-mail e/ou senha incorretos.');

  window.alert('Acesso permitido.');

  window.location.href = './app.html';
});
