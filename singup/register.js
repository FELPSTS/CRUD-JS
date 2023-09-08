document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
      alert('Por favor, preencha todos os campos!');
      return;
  }

  var user = {
      name: name,
      email: email,
      password: password
  };

  saveUser(user);
});

function saveUser(user) {
  fetch('/saveUser', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      console.error('Erro ao salvar usuário:', error);
      alert('Ocorreu um erro ao registrar o usuário. Tente novamente.');
  });
}
