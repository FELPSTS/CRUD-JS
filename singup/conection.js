const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

const Connection = mysqli.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'registro'
});

Connection.Connection((error)=>{
    if(error){
        console.error('Erro ao conectar ao banco de daods',error);
       }   else{
        console.log('conexão foi sucesso'); 
}
});