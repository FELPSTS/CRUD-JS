
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica as credenciais no banco de dados
  connection.query(
    'SELECT * FROM tabela_usuarios WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar o banco de dados.');
      } else {
        if (results.length > 0) {
          const user = results[0];
          if (user.senha === password) {
            // Redireciona para outra página em caso de login bem-sucedido
            res.redirect('/forgot.html');
          } else {
            res.status(401).send('Credenciais inválidas.');
          }
        } else {
          res.status(401).send('Credenciais inválidas.');
        }
      }
    }
  );
});
