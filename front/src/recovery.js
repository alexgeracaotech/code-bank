const email = document.querySelector('input[type="email"]');
const newPass = document.querySelector('#new');
const confirmPass = document.querySelector('#confirm');
const button = document.querySelector('button');

const getDatas = JSON.parse(sessionStorage.getItem('database')) || [];

button.addEventListener('click', (event) => {
  event.preventDefault();

  const emailValue = email.value;
  const newPassValue = newPass.value;
  const confirmPassValue = confirmPass.value;

  if (
    emailValue === '' ||
    newPassValue === '' ||
    confirmPassValue === ''
  ) {
    return window.alert('Todos campos precisam ser preenchidos.');
  }

  if (newPassValue !== confirmPassValue) {
    return window.alert('As senhas não coincidem.');
  }

  for (let i = 0; i < getDatas.length; i++) {
    if (getDatas[i].email === emailValue) {
      getDatas[i].password = newPassValue;
      sessionStorage.setItem('database', JSON.stringify(getDatas));
      alert('Senha recuperada com sucesso.');
      return window.location.href = './login.html';
    }
  }

  alert('Email não encontrado.');
});
