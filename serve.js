const express = require('express');
const mysql = require('mysql2');

const path = require('path');
const app = express();
const port = 3000;

// Configurando o middleware para servir arquivos estáticos
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'singin')));
app.use(express.static(path.join(__dirname, 'image')));
app.use(express.static(path.join(__dirname, 'forgot')));
app.use(express.static(path.join(__dirname, 'singup')));

app.get('/singin', (req, res) => {
  res.sendFile(path.join(__dirname, 'singin', 'index.html'));
});

app.get('/singup', (req, res) => {
  res.sendFile(path.join(__dirname, 'singup', 'index.html'));
});

app.get('/controle', (req, res) => {
  res.sendFile(path.join(__dirname, 'controle', 'index.html'));
});

app.get('/forgot', (req, res) => {
  res.sendFile(path.join(__dirname, 'forgot', 'index.html'));
});

app.post('/', (req, res) => {
  res.render('index');
});
// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'registro'
});
// Rota para receber os dados do formulário e salvar no banco de dados
app.post('/saveUser', (req, res) => {
  const { name, email, password } = req.body;

  // Executa a query SQL para inserir o usuário no banco de dados
  const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao salvar usuário no banco de dados:', error);
      res.status(500).json({ message: 'Erro ao salvar usuário' });
    } else {
      console.log('Usuário registrado com sucesso no banco de dados');
      res.status(200).json({ message: 'Usuário registrado com sucesso' });
    }
  });
});



// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
