const name = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');

const getDatas = JSON.parse(sessionStorage.getItem('database'));
const datas = [...getDatas];

button.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = name.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === '' || passwordValue === '')
    return window.alert('Os campos de email e/ou senha precisam estar preechidos.');

  datas[datas.length] = {
    name: nameValue || 'usuário',
    email: emailValue,
    password: passwordValue
  };

  sessionStorage.setItem('database', JSON.stringify(datas));
  window.alert('Cadastro realizado com sucesso.');

  window.location.href = './login.html';
});
